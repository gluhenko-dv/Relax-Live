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

  maxWidth += 140;
  let transformWidth = 0;

  if (window.screen.width < 575) {
    maxWidth += 260;
    if (wrap === ".nav-list-designs") maxWidth -= 100;
    if (wrap === "#scheme-list") maxWidth += 100;
    if (wrap === ".nav-list-popup-repair") maxWidth += 250;
  }

  prevBtn.addEventListener("click", (e) => {
    transformWidth -= maxItem;
    if (transformWidth < 0) transformWidth = 0;
    slidesWrap.style.transform = `translate(-${transformWidth}px, 0px)`;
  });
  nextBtn.addEventListener("click", (e) => {
    transformWidth += maxItem;
    if (transformWidth > maxWidth + maxItem)
      transformWidth = maxWidth + maxItem;
    slidesWrap.style.transform = `translate(-${transformWidth}px, 0px)`;
  });

  window.addEventListener("resize", () => {
    slidesWrap.style.transform = ``;
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
tabsSlider(
  ".nav-list-popup-repair",
  "nav-arrow-popup-repair_left",
  "nav-arrow-popup-repair_right"
);

window.addEventListener("resize", () => {
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
  tabsSlider(
    ".nav-list-popup-repair",
    "nav-arrow-popup-repair_left",
    "nav-arrow-popup-repair_right"
  );
});
export default tabsSlider;
