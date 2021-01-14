import smoothScroll from "./smoothScroll";
const toggleMenu = () => {
  const menuBtn = document.querySelector(".menu"),
    popupMenu = document.querySelector(".popup-menu"),
    popupDialogMenu = document.querySelector(".popup-dialog-menu"),
    closeMenuBtn = document.querySelector(".close-menu"),
    popupMenuNav = document.querySelector(".popup-menu-nav");

  const openMenu = () => {
    popupMenu.style.visibility = "visible";
    popupDialogMenu.style.transform = "translate3d(0,0,0)";
  };
  const closeMenu = () => {
    popupMenu.style.visibility = "";
    popupDialogMenu.style.transform = "";
  };

  menuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  popupMenuNav.addEventListener("click", (event) => {
    let target = event.target;

    if (target.closest(".menu-link")) {
      event.preventDefault();
      closeMenu();
      if (target.matches(".no-overflow")) return;
      smoothScroll(target);
    }
  });
};

export default toggleMenu;
