//плавный скрол
const smoothScroll = (target) => {
  const blockId = target.getAttribute("href");
  document.querySelector("" + blockId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const upBtn = document.querySelector(".button-footer>a");

upBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(upBtn);
  smoothScroll(upBtn);
});

export default smoothScroll;
