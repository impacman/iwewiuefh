export const modals = () => {
  const modalBtns = document.querySelectorAll('[data-open-modal]');
  const modalBtnsClose = document.querySelectorAll('[data-close-modal]');
  const body = document.querySelector('body');
  const header = document.querySelector('[data-header]');

  let unlock = true;

  const time = 600;

  if (modalBtns.length > 0) {
    const bodyLock = () => {
      const value = window.innerWidth - document.querySelector('[data-wrapper]').offsetWidth + 'px';
      body.style.paddingRight = value;
      body.style.overflow = 'hidden';
      header.style.width = `calc(100% - ${value})`;
    };

    const bodyUnlock = () => {
      body.style.paddingRight = null;
      body.style.overflow = null;
      header.style.width = null;
    };

    const closeModal = (modal) => {
      modal.classList.remove('is-active');

      setTimeout(() => {
        modal.classList.add('modal--preload');
        bodyUnlock();
      }, time);
    };

    const openModal = (modal) => {
      if (modal) {
        bodyLock();

        modal.classList.add('is-active');
        modal.classList.remove('modal--preload');

        modalBtnsClose.forEach((btn) => {
          btn.addEventListener('click', () => {
            closeModal(modal);
          });
        });
      }
    };

    modalBtns.forEach((btn) => {
      const nameModal = btn.dataset.openModal;
      const currentModal = document.querySelectorAll('[data-modal]');

      btn.addEventListener('click', () => {
        currentModal.forEach((modal) => {
          if (nameModal === modal.dataset.modal) {
            openModal(modal);
          }
        });
      });
    });
  }
};
