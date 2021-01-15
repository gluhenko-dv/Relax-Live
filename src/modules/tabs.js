import sliders from "./sliders";

const previewPag = (slider, index) => {
  const slide = slider.querySelectorAll("div");
  const previewBlocks = document.querySelectorAll(".preview-block");
  const curr = previewBlocks[index].querySelectorAll(
    ".preview-block__item>div"
  );

  const delelteActive = () => {
    curr.forEach((elem) => {
      elem.classList.remove("preview_active");
    });
  };

  const toggleSlide = (ind) => {
    slide.forEach((elem, i) => {
      elem.classList.add("hide");
      if (ind === i) elem.classList.remove("hide");
    });
  };

  curr.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      const target = e.target;
      delelteActive();
      target.classList.add("preview_active");
      toggleSlide(i);
    });
  });
};

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
        previewPag(slide, indexBtn);
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

const firstSlide = document.querySelector(".designs-slider__style1");
previewPag(firstSlide, 0);
export default tabs;
