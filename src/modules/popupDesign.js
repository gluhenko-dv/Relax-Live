
import togglePopups from './togglePopups';
const popupDesign = () => {
  const popupDialogDesign = document.querySelector(".popup-design"),
    linkListDesigns = document.querySelector(".link-list-designs>a");
  linkListDesigns.addEventListener("click", () => {
    togglePopups(popupDialogDesign);
  });
};

export default popupDesign;