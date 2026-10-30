/**
 * Web Connect Solutions — Lead Capture & Contact Form Controller with Web3Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('project-enquiry-form');
  const serviceSelect = document.getElementById('form-service');

  if (serviceSelect) {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value.toLowerCase().includes(serviceParam.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const phoneInput = document.getElementById('form-phone');
      const messageInput = document.getElementById('form-message');
      const statusBox = document.getElementById('form-status-box');
      const submitBtn = document.getElementById('form-submit-btn') || contactForm.querySelector('button[type="submit"]');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim() || !messageInput.value.trim()) {
        if (statusBox) {
          statusBox.className = 'p-4 rounded-xl text-sm font-semibold bg-rose-50 border border-rose-200 text-rose-800 block mt-4';
          statusBox.textContent = 'Please fill out all required fields with your contact details.';
        }
        return;
      }

      const selectedService = serviceSelect ? serviceSelect.value : 'Digital Services';
      const customerName = nameInput.value.trim();
      const customerPhone = phoneInput.value.trim();
      const customerEmail = emailInput.value.trim();
      const projectBrief = messageInput.value.trim();

      // Show submitting state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending Enquiry...
        `;
      }

      if (statusBox) {
        statusBox.className = 'p-4 rounded-xl text-sm font-semibold bg-blue-50 border border-blue-200 text-blue-800 block mt-4';
        statusBox.textContent = 'Submitting your enquiry...';
      }

      try {
        const formData = new FormData(contactForm);
        formData.set('access_key', 'ee9d4abe-5989-4120-8c15-3d8df31db141');
        formData.set('subject', `New Project Enquiry from ${customerName} - ${selectedService}`);
        formData.set('from_name', 'Web Connect Solutions Website');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          if (statusBox) {
            statusBox.className = 'p-4 rounded-xl text-sm font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 block mt-4';
            statusBox.innerHTML = `
              <div class="font-bold text-base mb-1 text-emerald-900">✓ Thank you, ${customerName}!</div>
              <p class="text-xs text-emerald-700 leading-relaxed mb-3">Your project enquiry has been submitted successfully to Web Connect Solutions. We will contact you shortly.</p>
              <a href="https://wa.me/918629927995?text=${encodeURIComponent(`Hello Web Connect Solutions, I just submitted an enquiry for ${selectedService}. My name is ${customerName}.`)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors">
                Connect on WhatsApp Direct &rarr;
              </a>
            `;
          }
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Web3Forms submit error:', err);
        if (statusBox) {
          const waText = encodeURIComponent(
            `Hello Web Connect Solutions,\n\nI would like to enquire about: *${selectedService}*\n\nName: ${customerName}\nPhone: ${customerPhone}\nEmail: ${customerEmail}\nProject Details: ${projectBrief}`
          );
          const targetWhatsAppUrl = `https://wa.me/918629927995?text=${waText}`;

          statusBox.className = 'p-4 rounded-xl text-sm font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 block mt-4';
          statusBox.innerHTML = `
            <div class="font-bold mb-1 text-emerald-900">✓ Connecting via WhatsApp...</div>
            <a href="${targetWhatsAppUrl}" target="_blank" rel="noopener noreferrer" class="underline font-bold text-emerald-700 text-xs inline-block mt-1">Click here to send message on WhatsApp &rarr;</a>
          `;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Project Enquiry</span>`;
        }
      }
    });
  }
});

