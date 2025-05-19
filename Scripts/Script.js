"use strict";

let linksArr = document.querySelectorAll(".header-menu-link");
const clean = () => {
  for (let i = 0; i < linksArr.length; i++) {
    const element = linksArr[i];
    if (element.classList.contains("is-current")) {
      element.classList.remove("is-current");
      console.log("Итеррация" + i);
    }
  }
};
const menuBack = (event) => {
  clean();
  let target = event.target;
  target.classList.add("is-current");
};
let curPage = document.querySelector(".menu");
curPage.addEventListener("click", menuBack);

// let imgToBig = document.querySelector(".gallery");
// const bigPicture = (event) => {
//     let biggy = event.target;

//     if (biggy.classList.contains("big-picture")) {
//         biggy.classList.remove("big-picture");
//         biggy.classList.add("big-fade");
//     } else {
//         biggy.classList.add("big-picture");
//     }
// };
// imgToBig.addEventListener("click", bigPicture);

let closeBtn = document.querySelector(".close-menu");
let menuBtn = document.querySelector(".menu-icon");
menuBtn.addEventListener("click", function () {
  let change = document.getElementById("menu-minscreen");
  change.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

const closeMenu = () => {
  let hideMenu = document.querySelector(".menu-minscreen");
  hideMenu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "flex";
};
closeBtn.addEventListener("click", closeMenu);

// Slider reviews
let reviews = document.querySelectorAll(".review-block");
let currentIndex = 0;
const left = document.getElementById("left");
const right = document.getElementById("right");

function showRev(index) {
  reviews[currentIndex].classList.remove("active");
  reviews[index].classList.add("active");
  currentIndex = index;
}

left.addEventListener("click", function () {
  let index = currentIndex - 1;
  if (index < 0) {
    index = reviews.length - 1;
  }
  showRev(index);
});
right.addEventListener("click", function () {
  let index = currentIndex + 1;
  if (index >= reviews.length) {
    index = 0;
  }
  showRev(index);
});
showRev(currentIndex);

//////////////////
let pictures = new Array();
let picLength = document.querySelectorAll(".gal-pic").length;

function newArr() {
  for (let i = 0; i < picLength; i++) {
    const element = pictures[i];
    pictures.push(document.querySelectorAll(".gal-pic")[i]);
  }
  console.log(pictures);
}
newArr();

let targetBlock = document.querySelector(".gallery");
targetBlock.addEventListener("click", function (event) {
  let targetPic = event.target;
  if (targetPic.classList.contains("big-picture")) {
    targetPic.classList.remove("big-picture");
  } else {
    console.log("Смотрим...");
    for (let i = 0; i < picLength; i++) {
      const element = pictures[i];
      element.classList.remove("big-picture");
      targetPic.classList.add("big-picture");
    }
  }
});

const formElement = document.querySelector(".form-container");
const buttonElement = document.querySelectorAll(".consult");
const formButtonElement = document.querySelector(".form-button");
const closeButtonElement = document.querySelector(".close-button");

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("consult")) {
    formElement.style.display = "flex";
    console.log("Проявили");
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("form-button")) {
    event.preventDefault();
    formElement.style.display = "none";
    console.log("Скрыли");
  }
});

closeButtonElement.addEventListener(
  "click",
  function (event) {
    formElement.style.display = "none";
    console.log("Скрыли");
  },
  true
);
