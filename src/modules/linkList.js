import togglePopups from './togglePopups';

const linkList = () => {
  const popupRepairTypes = document.querySelector(".popup-repair-types");
  const linkLists = document.querySelectorAll(".link-list");

  linkLists.forEach((item) => {
    item.addEventListener("click", () => {
      togglePopups(popupRepairTypes);
    });
  });
};

export default linkList;