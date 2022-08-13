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
