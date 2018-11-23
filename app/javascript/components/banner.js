import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome To Madame 'B' cocktails", "Have fun !"],
    typeSpeed: 50,
    loop: true
  });
};

export { loadDynamicBannerText };
