/* eslint-disable arrow-parens */

import togglePopups from "./togglePopups";

const buttonWide = () => {
  const buttons = document.querySelectorAll(".button_wide"),
    wide = document.querySelector(".popup-consultation");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePopups(wide);
    });
  });
};

export default buttonWide;
