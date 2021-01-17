const headerСontactsOpen = () => {
  const headerContactsPhoneNumberAccord = document.querySelector(
      ".header-contacts__phone-number-accord"
    ),
    headerContactsArrow = document.querySelector(".header-contacts__arrow");
  const togglePhoneClass = () => {
    headerContactsPhoneNumberAccord.classList.toggle("active");

    if (!headerContactsArrow.style.transform) {
      headerContactsArrow.style.transform = "rotate(180deg)";
      return;
    }
    headerContactsArrow.style.transform = "";
  };

  headerContactsArrow.addEventListener("click", togglePhoneClass);
};

export default headerСontactsOpen;
