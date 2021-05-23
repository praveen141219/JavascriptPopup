const popUpBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close");
const popUp = document.querySelector(".overlay");

const display = () => {
  popUp.classList.add("active");
};
const hide = () => {
  popUp.classList.remove("active");
};

popUpBtn.addEventListener("click", display);
closeBtn.addEventListener("click", hide);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popUp.classList.remove("active");
  }
});
