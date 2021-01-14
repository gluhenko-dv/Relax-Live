const headerСontactsOpen = () => {
  const headerContactsPhoneNumberAccord = document.querySelector(
      ".header-contacts__phone-number-accord"
    ),
    headerContactsArrow = document.querySelector(".header-contacts__arrow");

  const togglePhoneClass = () => {
    headerContactsPhoneNumberAccord.classList.toggle("active");
  };

  headerContactsArrow.addEventListener("click", togglePhoneClass);
};

export default headerСontactsOpen;