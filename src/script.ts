// innerText/ textContent
const heading = document.querySelector("h1");

if (heading !== null) {
  heading.textContent = "HELLO WORLD!";
}

// Set Attribute
const setAttribute = <HTMLParagraphElement>(
  document.querySelector("#setAttribute")
);
setAttribute.setAttribute("class", "newStyle");
console.log(setAttribute.getAttribute("class"));

const tests = document.querySelectorAll(
  ".test li"
) as NodeListOf<HTMLLIElement>;

// Using Style
const changeStyle = document.querySelector(".changeStyle") as HTMLDivElement;
changeStyle.style.color = "blue";

// Add or Remove class
const addStyle = document.querySelector(".addStyle") as HTMLDivElement;
addStyle.classList.add("newStyle");

// Array.from() will convert array like object to an array
const classes = Array.from(
  document.getElementsByClassName("test")
) as HTMLLIElement[];
classes.forEach((clas) => {
  console.log(clas);
});
console.log(classes);

// Append
const li = document.createElement("li");
li.textContent = "New li";
const appending = document.querySelector("#append") as HTMLUListElement;
appending.append(li);

// Append a section
const mainTag = document.querySelector("#mainTag") as HTMLBodyElement;

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
const addColor = document.querySelector("#add-color") as HTMLButtonElement;
addColor.onclick = addGrey;
function addGrey() {
  document.body.style.backgroundColor = "gray";
}

// Click Event(option3)
const btnClick = document.querySelector("#btn-click") as HTMLButtonElement;

btnClick.addEventListener("click", () => {
  console.log("clicked");
});

// Update text from input field

const updateBtn = document.querySelector("#update-btn") as HTMLButtonElement;

updateBtn.addEventListener("click", () => {
  const inputText = document.querySelector("#input-text") as HTMLInputElement;
  const newValue = inputText.value;
  const updateText = document.querySelector(
    "#update-text"
  ) as HTMLParagraphElement;
  updateText.textContent = newValue;
  inputText.value = "";
});

// Add comment
const addComment = document.querySelector(
  "#btn-addComment"
) as HTMLButtonElement;

addComment.addEventListener("click", () => {
  const commentField = <HTMLTextAreaElement>(
    document.querySelector("#comment-field")
  );
  const commentContainer = document.querySelector(
    "#comment-container"
  ) as HTMLParagraphElement;
  const commentText = commentField.value;
  const newComment = document.createElement("p");
  newComment.textContent = commentText;
  commentContainer.append(newComment);
  commentField.value = "";
});

// Focus/ blur /Keyup
const focusBlur = document.querySelector("#focus-blur") as HTMLInputElement;
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
  console.log((e.target as HTMLInputElement).value);
});
