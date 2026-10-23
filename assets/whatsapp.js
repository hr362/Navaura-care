/* NavAura Care: WhatsApp chat widget.
   Floating button + chat panel with quick options. Every conversation ends by
   opening WhatsApp (wa.me) with a prefilled message to the intake number. */
(function () {
  var NUMBER = '61431404000';
  var TEASER_DELAY = 6000;

  var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>';

  // Quick options: an instant answer, then a prefilled WhatsApp message.
  var OPTIONS = [
    { label: 'Make a referral',
      reply: 'Thanks for thinking of us. We reply to every referral within 24 hours. You can fill in our <a href="/referral.html">referral form</a> (3 minutes), or message us on WhatsApp now.',
      message: 'Hi NavAura Care, I would like to make a referral for NDIS support.' },
    { label: 'Ask about services',
      reply: 'We offer personal care, high intensity support, SIL, community participation, life skills, psychosocial support, children’s support, accessible transport and support coordination across Western and South West Sydney. See <a href="/services.html">all services</a>.',
      message: 'Hi NavAura Care, I would like to know more about your NDIS services.' },
    { label: 'Check availability',
      reply: 'Tell us the suburb, the days and times you need and the type of support, and we’ll let you know who’s available, including worker gender and language preferences.',
      message: 'Hi NavAura Care, I would like to check your availability. Suburb: \nDays/times: \nSupport needed: ' },
    { label: 'Book a meet & greet',
      reply: 'Before services begin we arrange a meet-and-greet with you and your proposed support worker, at home or in the community, so you can be confident in the match.',
      message: 'Hi NavAura Care, I would like to book a meet and greet.' },
    { label: 'I’m a support coordinator',
      reply: 'Great to hear from you. Send us the participant’s suburb, support needs and funding, and we’ll confirm capacity quickly. More on our <a href="/coordinators.html">coordinators page</a>.',
      message: 'Hi NavAura Care, I am a support coordinator and would like to discuss a referral.' },
    { label: 'Work with us',
      reply: 'We’re always looking for caring support workers. Apply on our <a href="/work-with-us.html">careers page</a>, or message us with your experience and suburb.',
      message: 'Hi NavAura Care, I am interested in working with you as a support worker.' }
  ];

  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/assets/whatsapp.css';
  document.head.appendChild(css);

  function waLink(text) {
    return 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(text);
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function store(key, val) {
    try { if (val === undefined) return sessionStorage.getItem(key); sessionStorage.setItem(key, val); } catch (e) { return null; }
  }

  var root = el('div', 'wa-widget');
  root.innerHTML =
    '<div class="wa-teaser" hidden>' +
      '<button class="wa-teaser-close" type="button" aria-label="Dismiss">×</button>' +
      '<button class="wa-teaser-text" type="button">Hi there 👋 Need help with NDIS support? <strong>Chat with us on WhatsApp</strong></button>' +
    '</div>' +
    '<section class="wa-panel" id="wa-panel" role="dialog" aria-modal="false" aria-labelledby="wa-title" hidden>' +
      '<header class="wa-head">' +
        '<img src="/assets/apple-touch-icon.png" alt="" width="40" height="40">' +
        '<div><p class="wa-title" id="wa-title">NavAura Care</p><p class="wa-status">We reply within 24 hours</p></div>' +
        '<button class="wa-close" type="button" aria-label="Close chat">×</button>' +
      '</header>' +
      '<div class="wa-body" aria-live="polite"></div>' +
      '<form class="wa-compose">' +
        '<label class="wa-sr" for="wa-input">Type your message</label>' +
        '<input id="wa-input" type="text" placeholder="Type a message…" autocomplete="off">' +
        '<button type="submit" aria-label="Send on WhatsApp">' + WA_ICON + '</button>' +
      '</form>' +
      '<p class="wa-note">Opens WhatsApp. Please don’t send medical reports here, email them to <a href="mailto:services@navauracare.com.au">services@</a>.</p>' +
    '</section>' +
    '<button class="wa-fab" type="button" aria-expanded="false" aria-controls="wa-panel" aria-label="Chat with NavAura Care on WhatsApp">' + WA_ICON + '</button>';
  document.body.appendChild(root);

  var fab = root.querySelector('.wa-fab');
  var panel = root.querySelector('.wa-panel');
  var body = root.querySelector('.wa-body');
  var teaser = root.querySelector('.wa-teaser');
  var input = root.querySelector('#wa-input');

  function bot(html) { var b = el('div', 'wa-msg wa-bot', html); body.appendChild(b); body.scrollTop = body.scrollHeight; return b; }
  function me(text) { var b = el('div', 'wa-msg wa-me'); b.textContent = text; body.appendChild(b); }

  function showOptions() {
    var wrap = el('div', 'wa-options');
    OPTIONS.forEach(function (o) {
      var btn = el('button', 'wa-opt'); btn.type = 'button'; btn.textContent = o.label;
      btn.addEventListener('click', function () { choose(o, wrap); });
      wrap.appendChild(btn);
    });
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function choose(o, wrap) {
    wrap.remove();
    me(o.label);
    var b = bot(o.reply);
    var cta = el('a', 'wa-cta', WA_ICON + '<span>Continue on WhatsApp</span>');
    cta.href = waLink(o.message); cta.target = '_blank'; cta.rel = 'noopener';
    b.appendChild(cta);
    var more = el('button', 'wa-more', 'Something else? See all options'); more.type = 'button';
    more.addEventListener('click', function () { more.remove(); showOptions(); });
    body.appendChild(more);
    body.scrollTop = body.scrollHeight;
  }

  function start() {
    body.innerHTML = '';
    bot('Hi there 👋 Welcome to <strong>NavAura Care</strong>, a registered NDIS provider in Western Sydney.');
    bot('How can we help today? Choose an option, or type your own message below.');
    showOptions();
  }

  function open() {
    if (!body.childNodes.length) start();
    panel.hidden = false; teaser.hidden = true;
    fab.setAttribute('aria-expanded', 'true'); fab.classList.add('is-open');
    store('wa-teaser-seen', '1');
    input.focus({ preventScroll: true });
  }
  function close() {
    panel.hidden = true;
    fab.setAttribute('aria-expanded', 'false'); fab.classList.remove('is-open');
    fab.focus();
  }

  fab.addEventListener('click', function () { panel.hidden ? open() : close(); });
  root.querySelector('.wa-close').addEventListener('click', close);
  root.querySelector('.wa-teaser-text').addEventListener('click', open);
  root.querySelector('.wa-teaser-close').addEventListener('click', function () { teaser.hidden = true; store('wa-teaser-seen', '1'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) close(); });

  root.querySelector('.wa-compose').addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) { input.focus(); return; }
    me(text);
    bot('Thanks! Opening WhatsApp so you can send this to our team…');
    input.value = '';
    window.open(waLink(text), '_blank', 'noopener');
  });

  if (!store('wa-teaser-seen')) {
    setTimeout(function () { if (panel.hidden) teaser.hidden = false; }, TEASER_DELAY);
  }
})();
