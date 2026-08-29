(function () {
  const toggle = document.querySelector('.bd-menu-toggle');
  const nav = document.querySelector('.bd-mobile-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  const slides = Array.from(document.querySelectorAll('.bd-hero-slide'));
  const controls = Array.from(document.querySelectorAll('[data-bd-slide]'));
  const heroRoot = document.querySelector('[data-bd-hero-root]');
  let activeSlide = 0;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }

    activeSlide = index % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeSlide);
    });
    controls.forEach((control, controlIndex) => {
      control.classList.toggle('is-active', controlIndex === activeSlide);
    });
    if (heroRoot) {
      const background = slides[activeSlide].getAttribute('data-bd-bg');
      if (background) {
        heroRoot.style.backgroundImage = `url('${background}')`;
      }
    }
  }

  controls.forEach((control) => {
    control.addEventListener('click', function () {
      showSlide(Number(control.getAttribute('data-bd-slide') || 0));
    });
  });

  if (slides.length > 1) {
    window.setInterval(function () {
      showSlide(activeSlide + 1);
    }, 5200);
  }

  const consentPanel = document.querySelector('.bd-consent');
  const consentSettings = document.querySelector('.bd-cookie-settings');
  const consentKey = 'different-mind-consent-v1';

  function readConsent() {
    try {
      const saved = window.localStorage.getItem(consentKey);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      return null;
    }
  }

  function showConsent() {
    if (!consentPanel) return;
    const current = readConsent();
    const analytics = consentPanel.querySelector('[name="analytics"]');
    const marketing = consentPanel.querySelector('[name="marketing"]');
    if (analytics) analytics.checked = Boolean(current && current.analytics);
    if (marketing) marketing.checked = Boolean(current && current.marketing);
    consentPanel.hidden = false;
  }

  function saveConsent(analytics, marketing) {
    const preferences = {
      analytics: Boolean(analytics),
      marketing: Boolean(marketing),
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(consentKey, JSON.stringify(preferences));
    if (consentPanel) consentPanel.hidden = true;
    window.dispatchEvent(new CustomEvent('bd:consent', { detail: preferences }));
  }

  if (consentPanel) {
    if (!readConsent()) showConsent();

    consentPanel.querySelectorAll('[data-consent]').forEach((button) => {
      button.addEventListener('click', function () {
        const choice = button.getAttribute('data-consent');
        const analytics = consentPanel.querySelector('[name="analytics"]');
        const marketing = consentPanel.querySelector('[name="marketing"]');
        if (choice === 'all') {
          saveConsent(true, true);
        } else if (choice === 'selection') {
          saveConsent(Boolean(analytics && analytics.checked), Boolean(marketing && marketing.checked));
        } else {
          saveConsent(false, false);
        }
      });
    });
  }

  if (consentSettings) {
    consentSettings.addEventListener('click', showConsent);
  }

  const withdrawal = document.querySelector('.bd-withdrawal');
  const withdrawalForm = withdrawal && withdrawal.querySelector('.bd-withdrawal-form');

  if (withdrawal && withdrawalForm) {
    withdrawalForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const status = withdrawalForm.querySelector('.bd-withdrawal-status');
      const submit = withdrawalForm.querySelector('button[type="submit"]');
      const formData = new FormData(withdrawalForm);
      const payload = Object.fromEntries(formData.entries());

      if (submit) submit.disabled = true;
      if (status) status.textContent = 'Der Widerruf wird übermittelt …';

      try {
        const response = await window.fetch(withdrawal.getAttribute('data-endpoint'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Übermittlung fehlgeschlagen.');

        if (status) {
          status.textContent = result.confirmationSent
            ? `Widerruf eingegangen. Referenz ${result.reference}; die Bestätigung wurde per E-Mail versendet.`
            : `Widerruf eingegangen. Referenz ${result.reference}; die E-Mail-Bestätigung konnte technisch nicht versendet werden. Bitte speichern Sie diese Referenz.`;
        }
        withdrawalForm.reset();
      } catch (error) {
        if (status) {
          status.textContent = `${error.message} Bitte senden Sie Ihren Widerruf an info@be-different.shop.`;
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  }
})();
