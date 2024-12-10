const nextBtn = document.querySelector(".slider__next");
const prevBtn = document.querySelector(".slider__prev");
const dots = document.querySelector(".slider__dots");
const dot = document.querySelectorAll(".slider__dot");
const imagesSlider = document.querySelector(".slider__images");
const imagesCount = imagesSlider.children.length;

let currIndex = 0;

function handleActive() {
  dot.forEach((dot, index) => {
    dot.classList.toggle("active", index === currIndex);
  });
}

function moveSlider(index) {
  currIndex = (index + imagesCount) % imagesCount;

  imagesSlider.style.transform = `translateX(-${currIndex * 100}%)`;
  // add animation to child
  imagesSlider.children[currIndex].style.animation = "blur 0.5s ease-in-out";
  console.log(currIndex);

  handleActive();
}

moveSlider(0);

nextBtn.addEventListener("click", () => {
  moveSlider(currIndex + 1);
});

prevBtn.addEventListener("click", () => {
  moveSlider(currIndex - 1);
});

dots.addEventListener("click", (e) => {
  const dot = e.target.closest(".slider__dot");
  if (dot) target = parseInt(dot.dataset.index);
  moveSlider(target);
});

const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector(".header__nav");

menuIcon.addEventListener("click", () => {
  //   const isExpended = menuIcon.getAttribute("aria-expanded") === true;
  //   menuIcon.setAttribute("aria-expanded", !isExpended).toggle();

  nav.classList.toggle("header__nav--active");
});
