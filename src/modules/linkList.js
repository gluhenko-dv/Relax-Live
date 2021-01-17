import togglePopups from "./togglePopups";

const linkList = () => {
  const popupRepairTypes = document.querySelector(".popup-repair-types");
  const linkLists = document.querySelectorAll(".link-list");


  linkLists.forEach((item) => {
    if (window.screen.width < 575) {
      item.style.display = "none";
      return;
    }
    item.style.display = "";
    item.addEventListener("click", () => {
      togglePopups(popupRepairTypes);
    });
  });
};

export default linkList;
