/**
 * Lumière — Homepage Scripts
 * Designed by David Joseph — May 2026
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ===================================================
     SCROLL REVEAL
     Adds .visible to .reveal elements when they enter
     the viewport, triggering CSS fade-up transitions.
  =================================================== */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once only
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ===================================================
     PROMO COUNTDOWN TIMER
     Counts down from a set end time and updates the
     timer display in the promo banner section.
  =================================================== */
  const timerEl = document.getElementById('promo-timer-value');

  if (timerEl) {
    // Set end date: 2 days, 14 hours from page load (demo)
    const endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);

    function updateTimer() {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        timerEl.textContent = 'Offer ended';
        return;
      }

      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timerEl.textContent =
        days + 'd ' +
        String(hours).padStart(2, '0') + 'h ' +
        String(minutes).padStart(2, '0') + 'm ' +
        String(seconds).padStart(2, '0') + 's';
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }


  /* ===================================================
     MEGA MENU — KEYBOARD ACCESSIBILITY
     Allows Enter/Space to open mega menus for keyboard
     users who cannot use hover.
  =================================================== */
  document.querySelectorAll('.nav-item').forEach(function (item) {
    const trigger = item.querySelector('.nav-link[data-mega]');
    if (!trigger) return;

    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
        item.classList.toggle('menu-open', !expanded);
      }
      if (e.key === 'Escape') {
        trigger.setAttribute('aria-expanded', 'false');
        item.classList.remove('menu-open');
        trigger.focus();
      }
    });
  });


  /* ===================================================
     NEWSLETTER FORM — BASIC VALIDATION
     Prevents empty or invalid email submissions and
     shows a simple inline success message.
  =================================================== */
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    const input = newsletterForm.querySelector('.newsletter-input');
    const btn   = newsletterForm.querySelector('.newsletter-btn');

    btn.addEventListener('click', function () {
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        input.style.borderColor = 'rgba(200, 80, 60, 0.6)';
        input.focus();
        return;
      }

      // Reset border and show confirmation
      input.style.borderColor = '';
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#2a5240';
      btn.disabled = true;
      input.value = '';
      input.disabled = true;

      // Reset after 4 seconds
      setTimeout(function () {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.disabled = false;
        input.disabled = false;
      }, 4000);
    });

    // Clear error state on input
    input.addEventListener('input', function () {
      input.style.borderColor = '';
    });
  }


  /* ===================================================
     ADD TO CART — MICRO INTERACTION
     Briefly animates the add-to-cart button on click
     to give the user visual feedback.
  =================================================== */
  document.querySelectorAll('.add-cart-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const original = btn.innerHTML;
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="#fff" fill="none" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>';
      btn.style.background = '#2a5240';
      btn.style.transform = 'scale(1.15)';

      // Update cart badge count
      const badge = document.querySelector('.cart-badge');
      if (badge) {
        const count = parseInt(badge.textContent) || 0;
        badge.textContent = count + 1;
        badge.style.transform = 'scale(1.3)';
        setTimeout(function () { badge.style.transform = ''; }, 200);
      }

      setTimeout(function () {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.transform = '';
      }, 1200);
    });
  });

});
