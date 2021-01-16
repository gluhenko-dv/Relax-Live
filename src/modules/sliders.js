const sliders = (slider) => {
  if (!slider) return;
  const mySlider = document.querySelector(`.${slider}`);

  const countCurr =
    mySlider.parentNode.parentNode.querySelector(
      ".slider-counter>div>.slider-counter-content__current"
    ) || "";
  const countTotal =
    mySlider.parentNode.parentNode.querySelector(
      ".slider-counter>div>.slider-counter-content__total"
    ) || "";

  const prevBtn =
    mySlider.parentNode.parentNode.querySelectorAll(".slider-arrow")[0] ||
    mySlider.parentNode.parentNode.querySelectorAll(".popup-arrow")[0] ||
    mySlider.parentNode.parentNode.querySelectorAll(
      ".slider-arrow-tablet-mobile"
    )[0] ||
    "";
  const nextBtn =
    mySlider.parentNode.parentNode.querySelectorAll(".slider-arrow")[1] ||
    mySlider.parentNode.parentNode.querySelectorAll(".popup-arrow")[1] ||
    mySlider.parentNode.parentNode.querySelectorAll(
      ".slider-arrow-tablet-mobile"
    )[1] ||
    "";

  const slides = document.querySelectorAll(`.${slider}>div`);

  if (countTotal) countTotal.textContent = slides.length;

  let countSlider = 0;
  if (countCurr) countCurr.textContent = countSlider + 1;

  const hideSlide = () => {
    slides.forEach((slide) => {
      slide.classList.add("hide");
      slide.classList.remove("active-item");
    });
  };

  const reloadSlider = () => {
    hideSlide();
    slides[0].classList.remove("hide");
    slides[0].classList.add("active-item");
  };

  const nextSlide = () => {
    countSlider++;
    if (countSlider === slides.length) countSlider = 0;
    hideSlide();
    slides[countSlider].classList.remove("hide");
    slides[countSlider].classList.add("active-item");
    if (countCurr) countCurr.textContent = countSlider + 1;
  };
  const prevSlide = () => {
    countSlider--;
    if (countSlider === -1) countSlider = slides.length - 1;
    hideSlide();
    slides[countSlider].classList.remove("hide");
    slides[countSlider].classList.add("active-item");
    if (countCurr) countCurr.textContent = countSlider + 1;
  };

  reloadSlider();

  if (!nextBtn && !prevBtn) return;
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
};

sliders("popup-transparency-slider");
sliders("designs-slider");
sliders("reviews-slider");
sliders("problems-slider");

if (window.screen.width < 1090) {
  sliders("transparency-slider");
}
if (window.screen.width > 1090) {
  document
    .querySelectorAll(".transparency-item")
    .forEach((item) => item.classList.remove("hide"));
}

export default sliders;
