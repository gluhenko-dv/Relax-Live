import sliders from "./sliders";

const tabs = (section, option) => {
  if (!section) return;
  const tabsSection = document.querySelector(section);
  const slides = tabsSection.querySelectorAll(`.${tabsSection.id}-slider>div`);
  const btnsWrap = tabsSection.querySelector(`nav`);
  const btns = tabsSection.querySelectorAll(`.button_o`);

  let toggleClass, optionBlock;

  if (option) {
    optionBlock = tabsSection.querySelectorAll(option);
    toggleClass = optionBlock[0].classList[1];
  }

  const toggleSlide = (indexBtn) => {
    slides.forEach((slide, indexSlide) => {
      slide.classList.add("hide");
      if (indexBtn === indexSlide) {
        slide.classList.remove("hide");
        if (slide.classList[0] === "scheme-slider__slide") return;
        sliders(slide.classList[0]);
      }
    });
  };

  btnsWrap.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest(".button_o")) {
      btns.forEach((btn, indexBtn) => {
        btn.classList.remove("active");
        if (btn === e.target) {
          toggleSlide(indexBtn);
          e.target.classList.add("active");
          if (!optionBlock) return;
          optionBlock.forEach((item, i) => {
            item.classList.remove(toggleClass);
            if (i === indexBtn) {
              item.classList.add(toggleClass);
            }
          });
        }
      });
    }
  });

  if (slides[0].classList[0] === "scheme-slider__slide") return;
  sliders(slides[0].classList[0]);
};

tabs(".designs", ".preview-block");
tabs(".repair-types");
tabs(".scheme", ".scheme-description-block");
tabs(".popup-design", ".popup-design-text");

export default tabs;
