export const animationScroll = () => {
  const animtItems = document.querySelectorAll('[data-animation]');
  const header = document.querySelector('[data-header]');

  if (animtItems.length > 0) {
    const offsetEl = (el) => {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
      };
    };

    const animOnScroll = () => {
      if (header) {
        if (window.pageYOffset > 300) {
          header.classList.add('scroll');
        } else {
          header.classList.remove('scroll');
        }
      }

      for (let i = 0; i < animtItems.length; i++) {
        const animItem = animtItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offsetEl(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('anim');
        } else {
          animItem.classList.remove('anim');
        }
      }
    };

    window.addEventListener('scroll', animOnScroll);
    window.addEventListener('load', animOnScroll);
  }
};
