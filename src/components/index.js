export default (editor, config = {}) => {
  editor.Components.addType('cms-article', {
    model: {
      defaults: {
        script: function () {
          function render(data) {
            try {
              const article = data.data[0].attributes;

              const title = article.title;
              const titleDom = document.querySelector('#placeholder-title');
              if (titleDom) {
                titleDom.innerHTML = title;
              }

              const bannerUrl = article.banner.data[0].attributes.url;
              const bannerDom = document.querySelector(
                '#placeholder-banner img',
              );
              if (bannerDom) {
                bannerDom.src = bannerUrl;
              }

              const imageUrlList = article.image.data.map(
                e => e.attributes.url,
              );
              console.log('imageUrlList', imageUrlList);

              const content = article.content;
              const contentDom = document.querySelector('#placeholder-content');
              const contentList = document.createDocumentFragment();
              content.split('\n').forEach(e => {
                const ele = document.createElement('p');
                ele.innerHTML = e;
                contentList.append(ele);
              });
              console.log('contentList', contentList);
              if (contentDom) {
                contentDom.replaceChildren(contentList);
              }
            } catch (e) {
              console.error('cms-article script error:', e);
            }
          }

          fetch(
            'https://beta-lutralutra-out.popmart.com/api/activities?filters[alias][$eq]=events&locale=zh&populate=*',
          )
            .then(response => response.json())
            .then(data => render(data));
        },
        // Add some style, just to make the component visible
        style: {
          // height: '100px',
        },
      },
    },
  });
};
