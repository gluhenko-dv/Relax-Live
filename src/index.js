"strict";

import toggleMenu from "./modules/toggleMenu";
import headerСontactsOpen from "./modules/headerContactsOpen";
import formulaHover from "./modules/formulaHover";
import transparency from "./modules/transparency";
import linkList from "./modules/linkList";
import popupDesign from "./modules/popupDesign";
import slider from "./modules/sliders";
import tab from "./modules/tabs";
import buttonWide from "./modules/buttonWide";
import privacy from "./modules/privacy";
import sliderPortfolio from "./modules/sliderPortfolio";
import popupRepairTypes from "./modules/popupRepairTypes";
import maskPhone from "./modules/phoneMask";
import sliderCarouselFunc from "./modules/sliderCarousel";
import sendForm from "./modules/sendForm";
import accordion from "./modules/accordion";
import tabsSliders from "./modules/sliderTabs";

//togglePopups();

toggleMenu();
//открытие header контактов
headerСontactsOpen();
//formula hover effects
formulaHover();
//transparency
transparency();

linkList();

popupDesign();

slider();

tab();

buttonWide();

privacy();
// portfolio

sliderPortfolio();
/////// подгрузка таблиц
popupRepairTypes();

sliderCarouselFunc();

maskPhone();

sendForm();

accordion();

tabsSliders();

window.addEventListener("resize", () => {
  slider();
});

