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
      { threshold: 0.6 }
    );
    counts.forEach(function (el) {
      el.textContent = "0";
      cio.observe(el);
    });
  }

  /* scroll-reveal — fade/translate elements in as they enter the viewport */
  var sel = [
    ".section > .eyebrow",
    ".section > .statement",
    ".section > .statement-support",
    ".section > .problem-close",
    ".cred-item",
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
