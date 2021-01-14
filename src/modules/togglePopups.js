const togglePopups = (popup) => {
  popup.style.visibility = "visible";
  const closeBtns =
    popup.querySelectorAll(".close") || popup.querySelector(".close");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      popup.style.visibility = "hidden";
    });
  });
};
export default togglePopups;
