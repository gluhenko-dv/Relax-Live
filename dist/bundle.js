!function(){"use strict";var e=function(e,t,n){var r=document.querySelector(e),o=document.getElementById(t),i=document.getElementById(n),s=0,l=0;if(r){r.querySelectorAll("button").forEach((function(e){l=e.offsetWidth>l?e.offsetWidth:l,s=+e.offsetWidth})),s+=140;var a=0;window.screen.width<1025&&window.screen.width>770&&(".nav-list-designs"===e&&(s-=200),"#scheme-list"===e&&(s-=100),".nav-list-repair"===e&&(s-=170),".nav-list-popup-repair"===e&&(s+=450),".nav-list-designs-popup"===e&&(s-=220)),window.screen.width<769&&window.screen.width>576&&(".nav-list-designs"===e&&(s-=200),"#scheme-list"===e&&(s-=100),".nav-list-repair"===e&&(s+=30),".nav-list-popup-repair"===e&&(s+=450),".nav-list-designs-popup"===e&&(s-=220)),window.screen.width<575&&(s+=260,".nav-list-designs"===e&&(s-=100),"#scheme-list"===e&&(s+=100),".nav-list-popup-repair"===e&&(s+=250)),o.addEventListener("click",(function(e){(a-=l)<0&&(a=0),r.style.transform="translate(-".concat(a,"px, 0px)")})),i.addEventListener("click",(function(e){(a+=l)>s+l&&(a=s+l),r.style.transform="translate(-".concat(a,"px, 0px)")})),window.addEventListener("resize",(function(){r.style.transform=""}))}};e(".nav-list-repair","nav-arrow-repair-left_base","nav-arrow-repair-right_base"),e(".nav-list-designs","nav-arrow-designs_left","nav-arrow-designs_right"),e("#scheme-list","nav-arrow-scheme_left","nav-arrow-scheme_right"),e(".nav-list-popup-repair","nav-arrow-popup-repair_left","nav-arrow-popup-repair_right"),e(".nav-list-designs-popup","nav-arrow-popup-designs_left","nav-arrow-popup-designs_right"),window.addEventListener("resize",(function(){e(".nav-list-repair","nav-arrow-repair-left_base","nav-arrow-repair-right_base"),e(".nav-list-designs","nav-arrow-designs_left","nav-arrow-designs_right"),e("#scheme-list","nav-arrow-scheme_left","nav-arrow-scheme_right"),e(".nav-list-popup-repair","nav-arrow-popup-repair_left","nav-arrow-popup-repair_right"),e(".nav-list-designs-popup","nav-arrow-popup-designs_left","nav-arrow-popup-designs_right")}));const t=e;var n=function(e){var t=e.getAttribute("href");document.querySelector(""+t).scrollIntoView({behavior:"smooth",block:"start"})},r=document.querySelector(".button-footer>a");r.addEventListener("click",(function(e){e.preventDefault(),n(r)}));const o=n,i=function(){var e=document.querySelectorAll(".menu"),t=(document.querySelector(".menu__icon"),document.querySelector(".popup-menu")),n=document.querySelector(".popup-dialog-menu"),r=document.querySelector(".close-menu"),i=function(){t.style.visibility="",n.style.transform=""};t.addEventListener("click",(function(e){var n=e.target;if(n===t&&i(),n.closest(".menu-link")){if(e.preventDefault(),i(),n.matches(".no-overflow"))return;o(n)}n===r&&i()})),e.forEach((function(e){e.addEventListener("click",(function(e){e.target.matches(".menu__icon")&&(t.style.visibility="visible",n.style.transform="translate3d(0,0,0)")}))}))},s=function(){var e=document.querySelector(".header-contacts__phone-number-accord"),t=document.querySelector(".header-contacts__arrow");t.addEventListener("click",(function(){e.classList.toggle("active"),t.style.transform?t.style.transform="":t.style.transform="rotate(180deg)"}))};var l=function(e,t){var n=document.querySelectorAll(t);document.querySelectorAll(e).forEach((function(e,r){e.addEventListener("mouseover",(function(){if(!(".formula-item-popup"===t&&window.screen.width<1025)){var o=window.screen.height/2,i=n[r].offsetHeight+e.offsetHeight-40;if(".problems-item-popup"===t&&(i=n[r].offsetHeight+100),e.style.zIndex="999",e.getBoundingClientRect().top<o)return n[r].style.visibility="visible",n[r].classList.add("rotate"),n[r].style.opacity="1",void(n[r].style.transform="translate3d(0px, ".concat(i,"px, 10px)"));n[r].style.visibility="visible",n[r].style.opacity="1",n[r].classList.remove("rotate"),n[r].style.transform=""}})),e.addEventListener("mouseout",(function(){window.screen.width<1025||(n.forEach((function(e){e.style.visibility="hidden",e.style.opacity="0.3"})),e.style.zIndex="2")}))}))};l(".formula-item",".formula-item-popup"),l(".problems-item",".problems-item-popup");const a=l,c=function(e){e.style.visibility="visible";var t=e.querySelectorAll(".close")||e.querySelector(".close");e.addEventListener("click",(function(t){t.target===e&&(e.style.visibility="hidden")})),t.forEach((function(t){t.addEventListener("click",(function(t){e.style.visibility="hidden"}))}))},d=function(){var e=document.querySelector(".popup-transparency");document.querySelectorAll(".transparency-item__img").forEach((function(t){t.addEventListener("click",(function(t){c(e)}))}))},u=function(){var e=document.querySelector(".popup-repair-types");document.querySelectorAll(".link-list").forEach((function(t){window.screen.width<575?t.style.display="none":(t.style.display="",t.addEventListener("click",(function(){c(e)})))}))},p=function(){var e=document.querySelector(".popup-design");document.querySelector(".link-list-designs>a").addEventListener("click",(function(){c(e)}))};var f=function(e){if(e){var t=document.querySelector(".".concat(e)),n=t.parentNode.parentNode.querySelector(".slider-counter>div>.slider-counter-content__current")||"",r=t.parentNode.parentNode.querySelector(".slider-counter>div>.slider-counter-content__total")||"",o=t.parentNode.parentNode.querySelectorAll(".slider-arrow")[0]||t.parentNode.parentNode.querySelectorAll(".popup-arrow")[0]||t.parentNode.parentNode.querySelectorAll(".slider-arrow-tablet-mobile")[0]||"",i=t.parentNode.parentNode.querySelectorAll(".slider-arrow")[1]||t.parentNode.parentNode.querySelectorAll(".popup-arrow")[1]||t.parentNode.parentNode.querySelectorAll(".slider-arrow-tablet-mobile")[1]||"",s=document.querySelectorAll(".".concat(e,">div"));r&&(r.textContent=s.length);var l=0;n&&(n.textContent=l+1);var a=function(){s.forEach((function(e){e.classList.add("hide"),e.classList.remove("active-item")}))};a(),s[0].classList.remove("hide"),s[0].classList.add("active-item"),(i||o)&&(i.addEventListener("click",(function(){++l===s.length&&(l=0),a(),s[l].classList.remove("hide"),s[l].classList.add("active-item"),n&&(n.textContent=l+1)})),o.addEventListener("click",(function(){-1==--l&&(l=s.length-1),a(),s[l].classList.remove("hide"),s[l].classList.add("active-item"),n&&(n.textContent=l+1)})))}};f("popup-transparency-slider"),f("designs-slider"),f("reviews-slider"),f("problems-slider"),window.screen.width<1090&&f("transparency-slider"),window.addEventListener("resize",(function(){window.screen.width<1090&&f("transparency-slider"),window.screen.width>1090&&document.querySelectorAll(".transparency-item").forEach((function(e){return e.classList.remove("hide")}))})),function(){var e=document.querySelector(".formula-slider"),t=document.getElementById("formula-arrow_left"),n=document.getElementById("formula-arrow_right"),r=document.createElement("div"),o=document.createElement("div"),i=document.querySelectorAll(".formula-slider__slide");r.id="last-clone",o.id="first-clone",r.className="formula-item formula-slider__slide",o.className="formula-item formula-slider__slide",r.innerHTML=i[i.length-1].innerHTML,o.innerHTML=i[0].innerHTML,e.prepend(r),e.appendChild(o),(i=document.querySelectorAll(".formula-slider__slide"))[1].classList.add("active");var s=0,l=i.length-3,a=function(t){window.screen.width<564?e.style.transform="translateX(-".concat(100*(t+1),"%)"):e.style.transform="translateX(-".concat(33*t,"%)"),i.forEach((function(e){return e.classList.remove("active")})),i[t+1].classList.add("active");var n=i[t+1];(n=n.querySelector(".formula-item-popup")).style.visibility="visible !important",n.style.opacity="1 !important",n.style.transform=""};i.forEach((function(e,t){e.addEventListener("click",(function(){s=t-1,console.log(s),s<0&&(s=l),s>l&&(s=0),a(s)}))})),t.addEventListener("click",(function(){--s<0&&(s=l),a(s)})),n.addEventListener("click",(function(){++s>l&&(s=0),a(s)}))}();const v=f;var m=function(e,t){var n=e.querySelectorAll("div"),r=document.querySelectorAll(".preview-block")[t].querySelectorAll(".preview-block__item>div");r.forEach((function(e,t){e.addEventListener("click",(function(e){var o,i=e.target;r.forEach((function(e){e.classList.remove("preview_active")})),i.classList.add("preview_active"),o=t,n.forEach((function(e,t){e.classList.add("hide"),o===t&&e.classList.remove("hide")}))}))}))},h=function(e,t){if(e){var n,r,o=document.querySelector(e),i=o.querySelectorAll(".".concat(o.id,"-slider>div")),s=o.querySelector("nav"),l=o.querySelectorAll(".button_o");t&&(r=o.querySelectorAll(t),n=r[0].classList[1]),s.addEventListener("click",(function(e){e.target.closest(".button_o")&&l.forEach((function(t,o){if(t.classList.remove("active"),t===e.target){if(function(e){i.forEach((function(t,n){if(t.classList.add("hide"),e===n){if(t.classList.remove("hide"),"designs-slider"===t.parentNode.classList[0]&&m(t,e),"scheme-slider__slide"===t.classList[0])return;v(t.classList[0])}}))}(o),e.target.classList.add("active"),!r)return;r.forEach((function(e,t){e.classList.remove(n),t===o&&e.classList.add(n)}))}}))})),"scheme-slider__slide"!==i[0].classList[0]&&v(i[0].classList[0])}};h(".designs",".preview-block"),h(".repair-types"),h(".scheme",".scheme-description-block"),h(".popup-design",".popup-design-text");var y=document.querySelector(".designs-slider__style1");m(y,0);const w=h,g=function(){var e=document.querySelectorAll(".button_wide"),t=document.querySelector(".popup-consultation");e.forEach((function(e){e.addEventListener("click",(function(){c(t)}))}))},_=function(){var e=document.querySelectorAll(".link-privacy"),t=document.querySelector(".popup-privacy");e.forEach((function(e){e.addEventListener("click",(function(){c(t)}))}))},b=function(){var e=function(e){var t=document.querySelector(".popup-portfolio"),n=t.querySelector(".slider-counter-content__current"),r=t.querySelector(".slider-counter-content__total"),o=t.querySelectorAll(".popup-portfolio-slider__slide"),i=document.getElementById("popup_portfolio_left"),s=document.getElementById("popup_portfolio_right"),l=document.querySelectorAll(".popup-portfolio-text"),a=o.length-1;document.body.addEventListener("click",(function(c){var d=c.target;d.closest(".portfolio-slider__slide-frame")&&(d=d.closest(".portfolio-slider__slide-frame"),t.style.visibility="visible",e.forEach((function(e,t){e===d&&function(e){var t=e;r.textContent=o.length;var c=function(){o.forEach((function(e){return e.style.display="none"})),l.forEach((function(e){return e.style.display=""})),o[t].style.display="",l[t].style.display="flex",n.textContent=t+1};c(),i.addEventListener("click",(function(){--t<0&&(t=a),c()})),s.addEventListener("click",(function(){++t>a&&(t=0),c()}))}(t)}))),(d===t||d.closest(".close"))&&(t.style.visibility="")}))},t=function(){window.screen.width>575?function(){var t=document.querySelector(".portfolio-slider.mobile-hide").querySelectorAll(".portfolio-slider__slide-frame"),n=document.querySelectorAll(".portfolio-slider__slide.fade-tab"),r=document.getElementById("portfolio-arrow_right"),o=document.getElementById("portfolio-arrow_left");r.style.display="";var i=0,s=n.length-1,l=n[0].offsetWidth;window.screen.width>1140&&(s-=2),window.screen.width<1025&&(s=n.length-2);var a=function(){n.forEach((function(e){return e.style.transform="translateX(-".concat(i*l,"px)")})),0===i?o.style.display="":i>0&&i<s?(r.style.display="",o.style.display="flex"):i===s&&(r.style.display="none")};a(),document.body.addEventListener("click",(function(e){var t=e.target;t.closest("#portfolio-arrow_right")?i++:t.closest("#portfolio-arrow_left")&&i--,a()})),e(t)}():function(){var t=document.querySelector(".portfolio-slider-mobile.tablet-hide.desktop-hide").querySelectorAll(".portfolio-slider__slide-frame"),n=document.getElementById("portfolio-arrow-mobile_right"),r=document.getElementById("portfolio-arrow-mobile_left"),o=document.getElementById("portfolio-counter"),i=o.querySelector(".slider-counter-content__current"),s=o.querySelector(".slider-counter-content__total"),l=0,a=t.length-1,c=t[0].offsetHeight;s.textContent=t.length;var d=function(){t.forEach((function(e){return e.style.transform="translateY(-".concat(l*c,"px)")})),i.textContent=l+1,0===l?r.style.pointerEvents="none":l>0&&l<a?(n.style.pointerEvents="",r.style.pointerEvents=""):l>=a&&(n.style.pointerEvents="none")};d(),document.body.addEventListener("click",(function(e){var t=e.target;t.closest("#portfolio-arrow-mobile_right")?l++:t.closest("#portfolio-arrow-mobile_left")&&l--,d()})),e(t)}()};window.addEventListener("resize",(function(){t()})),t()},S=function(){var e,t=document.querySelector(".nav-list-popup-repair"),n=(document.querySelector(".popup-repair-types-content__head-date"),document.querySelector(".popup-repair-types-content-table>table"));n.textContent="";var r=function(t){n.textContent="",e.forEach((function(e,r){r===t&&(document.getElementById("switch-inner").textContent=e.title,e.priceList.forEach((function(e){n.innerHTML+='\n      <tbody>\n        <tr class="mobile-row showHide">\n          <td class="repair-types-name">'.concat(e.typeService,'</td>\n          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n          <td class="repair-types-value">\n            ').concat(e.units,'</sup>\n          </td>\n          <td class="repair-types-value">').concat(e.cost," руб.</td>\n        </tr>\n      </tbody>")})))}))};fetch("./db/db.json").then((function(e){return e.json()})).then((function(n){var o=n.map((function(e){return e.title}));e=n.filter((function(e){return e.title})),function(e){var n;t.textContent="",e.forEach((function(e){e&&(t.innerHTML+='<button class="button_o popup-repair-types-nav__item">'.concat(e,"</button>"))})),(n=document.querySelectorAll(".popup-repair-types-nav__item"))[0].style.border="3px solid #F48922",n.forEach((function(e,t){e.addEventListener("click",(function(){r(t),n.forEach((function(e){e.style.border="3px solid #EEEBE5"})),e.style.border="3px solid #F48922"}))}))}(o),r(0)})).catch((function(e){return console.error(e)}))};function E(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),s=0,l=r.replace(/[_\d]/g,(function(e){return s<i.length?i.charAt(s++)||o.charAt(s):e}));-1!=(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=E(n);try{for(i.s();!(o=i.n()).done;){var s=o.value;s.addEventListener("input",r),s.addEventListener("focus",r),s.addEventListener("blur",r)}}catch(e){i.e(e)}finally{i.f()}}q('[name="phone"]');const k=q;function x(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){new(function(){function e(t){var n=t.main,r=t.wrap,o=t.next,i=t.prev,s=t.position,l=void 0===s?0:s,a=t.slidesToShow,c=void 0===a?4:a,d=t.responsive,u=void 0===d?[]:d,p=t.infinity,f=void 0!==p&&p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r&&n||console.warn("SLIDER: Передай свойства main и wrap!"),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=document.querySelector(r).children,this.next=document.getElementById(o),this.prev=document.getElementById(i),this.slidesToShow=c,this.infinity=f,this.option={position:l,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=u}var t,n;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=x(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style",document.head.appendChild(e)),e.textContent="\n    .glo-slider {\n      overflow: hidden !important;\n    }\n    .glo-slider__wrap {\n      display: flex !important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item{\n      display: flex !important;\n      align-items: center;\n      justify-content: center;\n      flex: 0 0 ".concat(this.option.widthSlide,"% !important;\n      margin: auto 0 !important;\n    }\n    .glo-slider__prev,\n    .glo-slider__next{\n      margin: 0 10px;\n      border: 20px solid transparent;\n      background: transparent;\n    }\n    .glo-slider__prev{\n      border-right-color: #19b5fe;\n    }\n    .glo-slider__next{\n      border-left-color: #19b5fe;\n    }\n    .glo-slider__prev:hover,\n    .glo-slider__next:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:focus{\n      background: transparent;\n    }\n    ")}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.infinity||this.option.position>0)&&(--this.option.position,this.option.position<0&&(this.option.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.option.position*this.option.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.infinity||this.option.position<this.slides.length-this.slidesToShow)&&(++this.option.position,this.option.position>this.slides.length-this.slidesToShow&&(this.option.position=0),this.wrap.style.transform="translateX(-".concat(this.option.position*this.option.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}},{key:"responseInit",value:function(){var e,t=this,n=this.slidesToShow,r=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,function(e){if(Array.isArray(e))return A(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());!function(){var e=document.documentElement.clientWidth;if(e<o)for(var i=0;i<r.length;i++)e<r[i]&&(t.slidesToShow=t.responsive[i].slidesToShow,t.option.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=n,t.option.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()}()}}])&&C(t.prototype,n),e}())({main:".partners-wrapper",wrap:".partners-slider",infinity:!0,prev:"partners-arrow_left",next:"partners-arrow_right",responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()};T();const I=T,N=function(){var e=document.createElement("div"),t=document.querySelector(".popup-thank"),n=document.querySelectorAll("form");document.querySelectorAll("form input").forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;t.style.border="none",t.setCustomValidity(""),"username"===t.name&&(t.value=t.value.replace(/[^а-яёА-ЯЁ\s]/gi,"")),"user_phone"===t.name&&(t.maxLength=11,"+"===t.value[0]&&(t.maxLength=12),t.value=t.value.replace(/[^0-9+]/gi,"")),"user_message"===t.name&&(t.value=t.value.replace(/[^а-яёА-ЯЁ\s\,\.\!\?\-]/gi,""))}))}));var r=function(t){e.classList.add("status-msg"),e.style.color="white",e.style.fontSize="18px",e.textContent="Тут будет сообщение",e.innerHTML=t,setTimeout((function(){e.textContent="",e.classList.remove("status-msg")}),5e3)};n.forEach((function(n){n.addEventListener("submit",(function(o){o.preventDefault();var i=n.querySelector(".checkbox__input");if(n.appendChild(e),function(e){var t=!0,n=e.querySelectorAll("input"),r=function(e){e.style.borderBottom="4px solid red !important",e.setCustomValidity("Заполните корректно!"),e.reportValidity(),t=!1};return n.forEach((function(e){""===e.value&&r(e),"username"===e.name&&e.value.length<2&&r(e),"user_email"===e.name&&""!==e.value.replace(/^\w+@\w+\.\w{2,}$/,"")&&r(e)})),t}(n))if(i.checked){r("Отправляю ваше сообщение");var s=new FormData(n),l={};s.forEach((function(e,t){l[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(l).then((function(e){if(200!==e.status)throw new Error("status network not 200");r("Спасибо! Мы скоро свяжемся с вами!"),n.reset(),c(t),setTimeout((function(){document.querySelector(".popup").style.display="none"}),4e3)})).catch((function(e){r("Что-то пошло не так..."),console.warn(e)}))}else r("Примите соглашение на обработку персональных данных");else r("Заполните поля корректно!")}))}))},B=function(){var e=document.querySelector(".accordion"),t=document.querySelectorAll(".title_block");e.addEventListener("click",(function(e){var n=e.target;n.matches(".title_block")&&(t.forEach((function(e){e.classList.remove("msg-active")})),n.classList.add("msg-active"))}))};i(),s(),a(),d(),u(),p(),v(),w(),g(),_(),b(),S(),I(),k(),N(),B(),t(),window.addEventListener("resize",(function(){i(),s(),a(),d(),u(),p(),v(),w(),g(),_(),b(),S(),I(),k(),N(),B(),t()}))}();