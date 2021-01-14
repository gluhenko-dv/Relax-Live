
import togglePopups from './togglePopups';
const privacy = () => {
  const privacyBtns = document.querySelectorAll(".link-privacy"),
    popupPrivacy = document.querySelector(".popup-privacy");

  privacyBtns.forEach((button) => {
    button.addEventListener("click", () => {
      togglePopups(popupPrivacy);
    });
  });
};

export default privacy;