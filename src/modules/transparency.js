import togglePopups from "./togglePopups";

const transparency = () => {
  const popupTransparency = document.querySelector(".popup-transparency"),
    popupTransparencyOpen = document.querySelectorAll(
      ".transparency-item__img"
    );

  popupTransparencyOpen.forEach((item) => {
    item.addEventListener("click", (e) => {
      togglePopups(popupTransparency);
    });
  });
};

export default transparency;
