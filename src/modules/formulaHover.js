const hover = (item, hoverItem) => {
  const hoverItems = document.querySelectorAll(hoverItem);
  const items = document.querySelectorAll(item);
  const closePopup = () => {
    hoverItems.forEach((item) => {
      item.style.visibility = "hidden";
      item.style.opacity = "0.3";
    });
  };

  items.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      if (hoverItem === ".formula-item-popup" && window.screen.width < 1025) {
        return;
      }
      const windowHeight = window.screen.height / 2;

      let translate = hoverItems[i].offsetHeight + item.offsetHeight - 40;
      if (hoverItem === ".problems-item-popup") {
        translate = hoverItems[i].offsetHeight + 100;
      }
      item.style.zIndex = "999";
      if (item.getBoundingClientRect().top < windowHeight) {
        hoverItems[i].style.visibility = "visible";
        hoverItems[i].classList.add("rotate");
        hoverItems[i].style.opacity = "1";
        hoverItems[
          i
        ].style.transform = `translate3d(0px, ${translate}px, 10px)`;
        return;
      }

      hoverItems[i].style.visibility = "visible";
      hoverItems[i].style.opacity = "1";
      hoverItems[i].classList.remove("rotate");
      hoverItems[i].style.transform = "";
    });
    item.addEventListener("mouseout", () => {
      if (window.screen.width < 1025) {
        return;
      }
      closePopup();
      item.style.zIndex = "2";
    });
    // eslint-disable-next-line arrow-body-style
  });
};

hover(".formula-item", ".formula-item-popup");
hover(".problems-item", ".problems-item-popup");

export default hover;
