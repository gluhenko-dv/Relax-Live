const tabsSlider = (wrap, prev, next) => {
  const slidesWrap = document.querySelector(wrap);
  const prevBtn = document.getElementById(prev);
  const nextBtn = document.getElementById(next);
  let maxWidth = 0;
  let maxItem = 0;
  if (!slidesWrap) return;

  const slides = slidesWrap.querySelectorAll("button");
  slides.forEach((item) => {
    maxItem = item.offsetWidth > maxItem ? item.offsetWidth : maxItem;
    maxWidth = +item.offsetWidth;
  });
  maxWidth -= 60;
  if (wrap === "#scheme-list") maxWidth += 100;
  let transformWidth = 0;

  prevBtn.addEventListener("click", (e) => {
    transformWidth -= maxItem;
    if (transformWidth < 0) transformWidth = 0;
    slidesWrap.style.transform = `translate(-${transformWidth}px, 0px)`;
  });
  nextBtn.addEventListener("click", (e) => {
    transformWidth += maxItem;
    if (transformWidth > maxWidth + maxItem) transformWidth = maxWidth + maxItem;
    slidesWrap.style.transform = `translate(-${transformWidth}px, 0px)`;
  });
};

tabsSlider(
  ".nav-list-repair",
  "nav-arrow-repair-left_base",
  "nav-arrow-repair-right_base"
);
tabsSlider(
  ".nav-list-designs",
  "nav-arrow-designs_left",
  "nav-arrow-designs_right"
);
tabsSlider("#scheme-list", "nav-arrow-scheme_left", "nav-arrow-scheme_right");

export default tabsSlider;
