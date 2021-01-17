import smoothScroll from "./smoothScroll";
const toggleMenu = () => {
  const menuBtn = document.querySelectorAll(".menu"),
    menuBtnFooter = document.querySelector(".menu__icon"),
    popupMenu = document.querySelector(".popup-menu"),
    popupDialogMenu = document.querySelector(".popup-dialog-menu"),
    closeMenuBtn = document.querySelector(".close-menu");

  const openMenu = () => {
    popupMenu.style.visibility = "visible";
    popupDialogMenu.style.transform = "translate3d(0,0,0)";
  };
  const closeMenu = () => {
    popupMenu.style.visibility = "";
    popupDialogMenu.style.transform = "";
  };

  popupMenu.addEventListener("click", (e) => {
    const target = e.target;

    if (target === popupMenu) {
      closeMenu();
    }

    if (target.closest(".menu-link")) {

      e.preventDefault();
      closeMenu();
      if (target.matches(".no-overflow")) return;
      smoothScroll(target);
    }

    if (target === closeMenuBtn) {
      closeMenu();
    }
  });

  menuBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.matches(".menu__icon")) {
        openMenu();
      }
    });
  });
};

export default toggleMenu;
