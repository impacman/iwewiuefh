export const navPage = () => {
  const openMenu = document.querySelector('[data-menu-open]');
  const navMenu = document.querySelector('[data-menu-nav]');
  const links = document.querySelectorAll('[data-link]');
  const blocks = document.querySelectorAll('[data-block]');

  let header = document.querySelector('[data-header]');
  let headerHeight;

  if (navMenu) {
    const toggleMenu = () => {
      openMenu.classList.toggle('open');
      navMenu.classList.toggle('open');
    };

    const removeActiveLink = () => {
      links.forEach((el) => {
        el.classList.remove('active');
      });
    };

    const scrollToBlock = (link) => {
      blocks.forEach((block) => {
        if (link === block.dataset.block) {

          if (link === 'home') {
            headerHeight = 0;
          } else {
            headerHeight = header.offsetHeight - 10;
          }

          window.scrollBy({
            top: block.getBoundingClientRect().top - headerHeight,
            behavior: 'smooth',
          });

        } else {
          return;
        }
      });
    };

    openMenu.addEventListener('click', toggleMenu);

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        removeActiveLink();
        link.classList.add('active');
        toggleMenu();

        scrollToBlock(link.dataset.link);
      });
    });
  }
};

