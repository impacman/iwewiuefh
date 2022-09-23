export const afid = () => {
  const afidM = 123123;
  const links = document.querySelectorAll('a');

  if (links.length > 0) {
    const linkAddHref = (link, href) => {
      link.setAttribute('href', href);
    };

    links.forEach((link) => {
      const href = link.getAttribute('href');
      const protocol = 'https://';

      if (href.includes(protocol)) {
        const url = new URL(href);
        const vars = url.search.substring(1).split('&');
        const search = [];

        if (url.search === '') {
          url.search = `afid=${afidM}`;
          linkAddHref(link, url.href);
        } else {
          for (const el of vars) {
            const arrEl = el.split('=');

            if (arrEl[0] === 'afid') {
              arrEl[1] = afidM;
            }

            search.push(arrEl.join('='));
          }
          url.search = search.join('&');
          linkAddHref(link, url.href);
        }
      }
    });
  }
};
