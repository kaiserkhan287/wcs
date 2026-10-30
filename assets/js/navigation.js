/**
 * Web Connect Solutions — Navigation & Mobile Drawer Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.getElementById('mobile-drawer');
  const openButtons = document.querySelectorAll('.mobile-menu-open');
  const closeButtons = document.querySelectorAll('.mobile-menu-close');

  if (drawer) {
    const openDrawer = () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    openButtons.forEach(btn => btn.addEventListener('click', openDrawer));
    closeButtons.forEach(btn => btn.addEventListener('click', closeDrawer));

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  // Mobile submenu accordion
  const mobileAccordionBtn = document.getElementById('mobile-services-toggle');
  const mobileAccordionContent = document.getElementById('mobile-services-menu');
  const mobileAccordionChevron = document.getElementById('mobile-services-chevron');

  if (mobileAccordionBtn && mobileAccordionContent) {
    mobileAccordionBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = mobileAccordionContent.classList.contains('hidden');
      if (isHidden) {
        mobileAccordionContent.classList.remove('hidden');
        if (mobileAccordionChevron) mobileAccordionChevron.style.transform = 'rotate(180deg)';
      } else {
        mobileAccordionContent.classList.add('hidden');
        if (mobileAccordionChevron) mobileAccordionChevron.style.transform = 'rotate(0deg)';
      }
    });
  }
});
