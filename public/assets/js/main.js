/**
 * Web Connect Solutions — Main Interaction Engine
 * FAQ accordions, header scroll state, and utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close siblings
        faqItems.forEach((sibling) => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const siblingTrigger = sibling.querySelector('.faq-trigger');
            if (siblingTrigger) siblingTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('active', !isActive);
        trigger.setAttribute('aria-expanded', String(!isActive));
      });
    }
  });

  // Header scroll shadow
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'bg-white/95');
        header.classList.remove('bg-white/80');
      } else {
        header.classList.remove('shadow-md', 'bg-white/95');
        header.classList.add('bg-white/80');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Typewriter effect for Hero headline (changes sequentially & smoothly)
  const headlineEl = document.getElementById('typewriter-headline');
  if (headlineEl) {
    const titles = [
      'High-Performance Websites',
      'Distinctive Brand Identities',
      'Top Organic Google Rankings',
      'Custom E-Commerce Storefronts',
      'High-ROI Digital Marketing',
      'Scalable Web Applications'
    ];
    let titleIndex = 0;
    let charIndex = titles[0].length;
    let isDeleting = true;

    function step() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        charIndex--;
        headlineEl.textContent = currentTitle.substring(0, charIndex);
        if (charIndex <= 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          setTimeout(step, 400); // pause before typing next title
          return;
        }
        setTimeout(step, 35); // deletion speed
      } else {
        charIndex++;
        headlineEl.textContent = currentTitle.substring(0, charIndex);
        if (charIndex >= currentTitle.length) {
          isDeleting = true;
          setTimeout(step, 2400); // hold full title for user reading
          return;
        }
        setTimeout(step, 65); // typing speed
      }
    }

    // Initial pause before rotating
    setTimeout(step, 2000);
  }

  // Update current year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
