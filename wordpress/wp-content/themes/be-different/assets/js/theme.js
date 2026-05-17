(function () {
  const toggle = document.querySelector('.bd-menu-toggle');
  const nav = document.querySelector('.bd-mobile-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
})();
