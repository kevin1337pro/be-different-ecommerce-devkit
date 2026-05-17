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
})();
