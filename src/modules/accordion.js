const accordion = () => {
  const accordionWrap = document.querySelector(".accordion");
  const titleBlocks = document.querySelectorAll(".title_block");

  const closeAcc = () => {
    titleBlocks.forEach((item) => {
      item.classList.remove("msg-active");
    });
  };

  accordionWrap.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".title_block")) {
      closeAcc();
      target.classList.add("msg-active");
    }
  });

};

export default accordion;
