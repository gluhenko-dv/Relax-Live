const formulaHover = (item) => {
  const formulaItemIcon = document.querySelectorAll(".formula-item__icon"),
    formulaItemPopup = document.querySelectorAll(".formula-item-popup");

  const closePopup = () => {
    formulaItemPopup.forEach((item) => {
      item.style.visibility = "hidden";
      item.style.opacity = "0.3";
    });
  };

  formulaItemIcon.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const itemPopup = item.querySelector(".formula-item-popup");
      itemPopup.style.visibility = "visible";
      itemPopup.style.opacity = "1";
    });
    item.addEventListener("mouseout", () => {
      closePopup();
    });
  });
};

export default formulaHover;
