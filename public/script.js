"use strict";
// innerText/ textContent
const heading = document.querySelector("h1");
if (heading !== null) {
    heading.textContent = "HELLO WORLD!";
}
// Set Attribute
const setAttribute = (document.querySelector("#setAttribute"));
setAttribute.setAttribute("class", "newStyle");
console.log(setAttribute.getAttribute("class"));
const tests = document.querySelectorAll(".test li");
// Using Style
const changeStyle = document.querySelector(".changeStyle");
changeStyle.style.color = "blue";
// Add or Remove class
const addStyle = document.querySelector(".addStyle");
addStyle.classList.add("newStyle");
// Array.from() will convert array like object to an array
const classes = Array.from(document.getElementsByClassName("test"));
classes.forEach((clas) => {
    console.log(clas);
});
console.log(classes);
// Append
const li = document.createElement("li");
li.textContent = "New li";
const appending = document.querySelector("#append");
appending.append(li);
// Append a section
const mainTag = document.querySelector("#mainTag");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.textContent = "Adding a append heading";
section.append(h1);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "1st li";
ul.append(li1);
const li2 = document.createElement("li");
li2.textContent = "2st li";
ul.append(li2);
section.append(ul);
mainTag.append(section);
// Click Event(option1)
function directFunction() {
    console.log("Direct Function Added");
}
// Click Event(option2)
const addColor = document.querySelector("#add-color");
addColor.onclick = addGrey;
function addGrey() {
    document.body.style.backgroundColor = "gray";
}
// Click Event(option3)
const btnClick = document.querySelector("#btn-click");
btnClick.addEventListener("click", () => {
    console.log("clicked");
});
// Update text from input field
const updateBtn = document.querySelector("#update-btn");
updateBtn.addEventListener("click", () => {
    const inputText = document.querySelector("#input-text");
    const newValue = inputText.value;
    const updateText = document.querySelector("#update-text");
    updateText.textContent = newValue;
    inputText.value = "";
});
// Add comment
const addComment = document.querySelector("#btn-addComment");
addComment.addEventListener("click", () => {
    const commentField = (document.querySelector("#comment-field"));
    const commentContainer = document.querySelector("#comment-container");
    const commentText = commentField.value;
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentContainer.append(newComment);
    commentField.value = "";
});
// Focus/ blur /Keyup
const focusBlur = document.querySelector("#focus-blur");
focusBlur.addEventListener("focus", () => {
    console.log("On Focused");
});
focusBlur.addEventListener("blur", () => {
    console.log("Focus Removed");
});
// focusBlur.addEventListener("keydown", (e) => {
//   console.log((e.target as HTMLInputElement).value);
// });
// focusBlur.addEventListener("keypress", (e) => {
//   console.log((e.target as HTMLInputElement).value);
// });
focusBlur.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});
// Github Delete like Button
const deleteField = document.querySelector("#delete-field");
const deleteBtn = document.querySelector("#delete-btn");
deleteField.addEventListener("keyup", (e) => {
    const inputData = e.target.value;
    if (inputData.toLowerCase() == "delete") {
        deleteBtn.removeAttribute("disabled");
    }
    else {
        deleteBtn.setAttribute("disabled", "");
    }
});
deleteBtn.addEventListener("click", () => {
    const deleteText = document.querySelector("#delete-text");
    deleteText.style.display = "none";
});
