"use strict";
const listTwo = document.querySelector("#list-2");
const ulList = document.querySelector("#ul-list");
const sectionBlock = document.querySelector("section");
const bodyBlock = document.querySelector("body");
listTwo.addEventListener("click", (e) => {
    console.log("li clicked");
    //   e.stopPropagation();
    e.stopImmediatePropagation();
});
listTwo.addEventListener("click", (e) => {
    console.log("li2 clicked");
});
ulList.addEventListener("click", () => {
    console.log("ul clicked");
});
sectionBlock.addEventListener("click", () => {
    console.log("section clicked");
});
bodyBlock.addEventListener("click", () => {
    console.log("body clicked");
});
