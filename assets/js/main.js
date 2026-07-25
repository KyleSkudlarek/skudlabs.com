/* Skud Labs — progressive enhancement: sticky-nav state, cursor spotlight,
   count-up stats, and scroll-reveal. No framework. Everything degrades
   gracefully without JS (the `.js` guard in styles.css means reveal targets
   only hide once this file marks the document; counters keep their HTML value). */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* footer year */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* sticky header gains a backdrop once you scroll off the hero */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 48);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* cursor "moonlight" spotlight — hover-capable pointers only (skips touch) */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var cards = document.querySelectorAll(".card, .work-card");
    cards.forEach(function (card) {
      var rect = null;
      card.addEventListener("pointerenter", function () {
        rect = card.getBoundingClientRect();
      });
      card.addEventListener("pointermove", function (e) {
        if (!rect) rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });
  }

  /* count-up stats (animate when scrolled into view) */
  var counts = document.querySelectorAll(".count");
  function runCount(el) {
    var to = parseInt(el.getAttribute("data-to"), 10) || 0;
    var comma = el.getAttribute("data-comma");
    var dur = 1200;
    var start = null;
    function fmt(n) {
      return comma ? n.toLocaleString("en-US") : String(n);
    }
    function tick(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counts.length && !reduce && hasIO) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            runCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      /* fire as soon as any of it peeks above the fold — the cred band sits
         right at the fold now, and a stalled "0+ years" reads as bad copy */
      { threshold: 0.01 }
    );
    counts.forEach(function (el) {
      el.textContent = "0";
      cio.observe(el);
    });
  }

  /* floating chat widget (placeholder for the live AI assistant) */
  var fab = document.querySelector(".chat-fab");
  var widget = document.querySelector(".chat-widget");
  if (fab && widget) {
    var setChat = function (open) {
      widget.hidden = !open;
      fab.setAttribute("aria-expanded", open ? "true" : "false");
    };
    fab.addEventListener("click", function () { setChat(widget.hidden); });
    document.querySelectorAll("[data-chat-open]").forEach(function (b) {
      b.addEventListener("click", function () { setChat(true); });
    });
    document.querySelectorAll("[data-chat-close]").forEach(function (b) {
      b.addEventListener("click", function () { setChat(false); });
    });
  }

  /* pricing "Get started" → prefill the contact message + focus the Name field
     (the #contact anchor handles the scroll; we just seed the form). */
  var cfMsg = document.getElementById("cf-msg");
  var cfName = document.getElementById("cf-name");
  document.querySelectorAll("[data-prefill]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (cfMsg) cfMsg.value = btn.getAttribute("data-prefill");
      if (cfName) {
        setTimeout(function () { cfName.focus({ preventScroll: true }); }, 350);
      }
    });
  });

  /* contact form → AWS Lambda Function URL (which emails via SES).
     SAFETY: until CONTACT_ENDPOINT is set to your real Function URL (see
     aws/contact-lambda/README.md), we DON'T hijack submit — the form keeps its
     honest "email me" note instead of POSTing to a dead URL on the live site. */
  var CONTACT_ENDPOINT = "https://REPLACE_WITH_YOUR_LAMBDA_FUNCTION_URL/";
  var endpointReady = CONTACT_ENDPOINT.indexOf("REPLACE_WITH") === -1;
  var cform = document.querySelector(".contact-form");
  var cstatus = cform && cform.querySelector(".form-status");
  if (cform && cstatus) {
    var nameEl = cform.querySelector("[name=name]");
    var emailEl = cform.querySelector("[name=email]");
    var msgEl = cform.querySelector("[name=message]");
    var hpEl = cform.querySelector("[name='_company']");
    var sendBtn = cform.querySelector("button[type=submit]");
    var setStatus = function (msg, kind) {
      cstatus.textContent = msg || "";
      cstatus.classList.remove("is-ok", "is-err");
      if (kind) cstatus.classList.add(kind);
      cstatus.hidden = !msg;
    };
    if (endpointReady) cform.setAttribute("action", CONTACT_ENDPOINT);
    cform.addEventListener("submit", function (e) {
      e.preventDefault(); // never let the form do a native (dead) POST
      if (hpEl && hpEl.value) return; // honeypot tripped — silently drop the bot
      if (!cform.checkValidity()) { cform.reportValidity(); return; }
      // Endpoint not wired yet → point them at email instead of failing silently.
      if (!endpointReady) {
        setStatus("The form isn't live just yet — please email me at hello@skudlabs.com and I'll reply fast.", "is-err");
        return;
      }
      sendBtn.disabled = true;
      setStatus("Sending…", null);
      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameEl.value.trim(),
          email: emailEl.value.trim(),
          message: msgEl.value.trim()
        })
      })
        .then(function (r) {
          if (!r.ok) throw new Error("status " + r.status);
          cform.reset();
          setStatus("Thanks — I got it, and I'll reply fast (usually same day).", "is-ok");
        })
        .catch(function () {
          setStatus("Sorry — that didn't go through. Please email me at hello@skudlabs.com and I'll jump on it.", "is-err");
        })
        .finally(function () { sendBtn.disabled = false; });
    });
  }

  /* scroll-reveal — fade/translate elements in as they enter the viewport */
  var sel = [
    ".section > .eyebrow",
    ".section > .statement",
    ".section > .statement-support",
    ".section > .problem-close",
    ".tell",
    ".card",
    ".step",
    ".work-card",
    ".portfolio-item",
    ".chips",
    ".callout",
    ".about-photo",
    ".about-copy",
    ".faq-item",
    ".cta-band-inner > *"
  ].join(",");

  var targets = document.querySelectorAll(sel);

  if (reduce || !hasIO) {
    targets.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  targets.forEach(function (el) {
    io.observe(el);
  });
})();
