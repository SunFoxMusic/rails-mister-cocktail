import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome To Mister 'B' Cocktails", "Have fun !"],
    typeSpeed: 50,
    loop: true
  });
};

export { loadDynamicBannerText };
