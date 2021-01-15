const togglePopups = (popup) => {
  popup.style.visibility = "visible";
  const closeBtns =
    popup.querySelectorAll(".close") || popup.querySelector(".close");
  popup.addEventListener("click", (e) => {
    if ((e.target === popup)) {
      popup.style.visibility = "hidden";
    }
  });
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      popup.style.visibility = "hidden";
    });
  });
};
export default togglePopups;
