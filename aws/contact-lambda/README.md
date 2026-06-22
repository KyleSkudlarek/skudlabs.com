# Contact form backend — Lambda Function URL + Amazon SES

The site's contact form POSTs JSON to a **Lambda Function URL**; the Lambda
([`index.mjs`](index.mjs)) emails the submission to you via **Amazon SES**. No
servers, no API Gateway, ~free at this volume. Everything lives in **your** AWS
account (`641383114949`, `us-east-1` — same as Amplify).

> This folder is **private** — `amplify.yml` only ships `index.html` + `assets/`,
> so nothing here is ever published. Don't add a `cp` line for it.

## One-time setup (~1 hour, mostly waiting on SES)

### 1. Verify a sender identity in SES
AWS Console → **Amazon SES** (region **us-east-1**) → *Identities* → *Create
identity*.
- Easiest/best: verify the **domain** `skudlabs.com`. SES gives you DKIM CNAME
  records — add them in **Route 53** (you already own the hosted zone). Verifies
  in a few minutes. Then you can send **from** `hello@skudlabs.com`.
- Quicker alternative: verify a single **email address** instead (click the link
  AWS emails you). You can send from just that address.

### 2. (If needed) leave the SES sandbox
New SES accounts are "sandboxed": you can only send **to verified** addresses.
- If `MAIL_TO` is your own address and you verify it, **you can ship today** — no
  sandbox removal needed.
- To be safe/general, request production access: SES → *Account dashboard* →
  *Request production access* (a short form, ~24h approval).

### 3. Create the Lambda
Console → **Lambda** → *Create function* → *Author from scratch*.
- Name: `skudlabs-contact`
- Runtime: **Node.js 20.x**, Architecture: arm64 (cheaper) or x86_64
- Paste the contents of [`index.mjs`](index.mjs) into the editor, **Deploy**.
  (No `npm install` — the SES v3 SDK ships with the Node 20 runtime.)

**Configuration → Environment variables:**
| Key | Value |
|-----|-------|
| `MAIL_TO` | where leads land, e.g. `you@skudlabs.com` |
| `MAIL_FROM` | an SES-verified sender, e.g. `hello@skudlabs.com` |
| `ALLOW_ORIGIN` | `https://skudlabs.com` |

> **Quickest test path (no domain DNS, no sandbox ticket):** in step 1 verify the
> single address `kjs2wp@gmail.com`, then set **both** `MAIL_TO` and `MAIL_FROM` to
> `kjs2wp@gmail.com`. SES sandbox lets you email a verified address immediately, so
> the integration works end-to-end today. (Sending *from* a gmail.com address via
> SES can land in spam due to Gmail's DMARC — fine for testing. For production,
> verify the `skudlabs.com` domain and switch `MAIL_FROM` to `hello@skudlabs.com`.)

**Configuration → Permissions →** click the execution role → *Add permissions →
Create inline policy* → JSON:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "ses:SendEmail",
    "Resource": "*"
  }]
}
```

### 4. Add a Function URL
Lambda → *Configuration* → **Function URL** → *Create function URL*.
- Auth type: **NONE** (the form is public; the honeypot + SES handle abuse)
- CORS: you can leave the console CORS off — the function returns its own CORS
  headers (scoped to `ALLOW_ORIGIN`) and handles the `OPTIONS` preflight.
- Copy the URL it gives you (looks like
  `https://abc123....lambda-url.us-east-1.on.aws/`).

### 5. Wire the front end
In [`assets/js/main.js`](../../assets/js/main.js), set:
```js
var CONTACT_ENDPOINT = "https://abc123....lambda-url.us-east-1.on.aws/";
```
Commit + push to `main`. Amplify redeploys and the form goes live. Until this is
set to a real URL, the form intentionally stays inert (shows the "email me"
note) so the live site never posts to a dead endpoint.

## Test
- Curl: `curl -X POST <FUNCTION_URL> -H 'Content-Type: application/json' -d
  '{"name":"Test","email":"you@example.com","message":"hello"}'` → `{"ok":true}`
  and an email arrives.
- Then submit the real form on skudlabs.com.

## Notes
- **Spam:** honeypot field (`_company`) is dropped server-side. If spam grows,
  add SES bounce handling or a CAPTCHA later — not needed at launch.
- **Cost:** SES is $0.10 per 1,000 emails; Lambda + Function URL free-tier covers
  this. Effectively free.
- **Reply-To** is set to the submitter's email, so you can reply straight from
  your inbox.
