// Skud Labs contact form → email via Amazon SES.
// Runtime: Node.js 20.x (ESM). Invoked by a Lambda Function URL (POST JSON).
// The AWS SDK v3 SESv2 client is preinstalled in the Lambda Node 20 runtime,
// so this function needs NO bundled dependencies — paste it straight in.
//
// Env vars (set on the function):
//   MAIL_TO     – where submissions are delivered (e.g. you@skudlabs.com)
//   MAIL_FROM   – an SES-verified sender (e.g. hello@skudlabs.com)
//   ALLOW_ORIGIN– allowed CORS origin (e.g. https://skudlabs.com)
//
// IAM: the function role needs `ses:SendEmail` (see README).

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({});

const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = process.env.MAIL_FROM;
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "https://skudlabs.com";

const cors = {
  "Access-Control-Allow-Origin": ALLOW_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const reply = (status, body) => ({
  statusCode: status,
  headers: { "Content-Type": "application/json", ...cors },
  body: JSON.stringify(body),
});

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const clip = (s, n) => String(s).slice(0, n);

export const handler = async (event) => {
  const method =
    event?.requestContext?.http?.method || event?.httpMethod || "POST";

  // CORS preflight
  if (method === "OPTIONS") return { statusCode: 204, headers: cors, body: "" };
  if (method !== "POST") return reply(405, { error: "Method not allowed" });

  // Function URLs may base64-encode the body
  let raw = event.body || "{}";
  if (event.isBase64Encoded) raw = Buffer.from(raw, "base64").toString("utf8");

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return reply(400, { error: "Invalid JSON" });
  }

  // Honeypot: real users never fill this. Pretend success so bots don't learn.
  if (data._company) return reply(200, { ok: true });

  const name = clip((data.name || "").trim(), 200);
  const email = clip((data.email || "").trim(), 320);
  const message = clip((data.message || "").trim(), 5000);

  if (!name || !message || !isEmail(email)) {
    return reply(400, { error: "Please include your name, a valid email, and a message." });
  }

  const text =
    `New contact form submission — skudlabs.com\n\n` +
    `Name:  ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}\n`;

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: MAIL_FROM,
        Destination: { ToAddresses: [MAIL_TO] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `Skud Labs contact — ${name}` },
            Body: { Text: { Data: text } },
          },
        },
      })
    );
    return reply(200, { ok: true });
  } catch (err) {
    console.error("SES send failed:", err);
    return reply(502, { error: "Could not send. Try again or email directly." });
  }
};
