"use strict";
const lists = document.querySelectorAll(".list");
const listContainer = document.querySelector("#list-container");
// lists.forEach((list) => {
//   list.addEventListener("click", (e) => {
//     (e.target as HTMLLIElement).parentNode?.removeChild(
//       e.target as HTMLLIElement
//     );
//   });
// });
listContainer.addEventListener("click", (e) => {
    var _a;
    (_a = e.target.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(e.target);
});
const addItem = document.querySelector("#add-item");
addItem.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item Added";
    newItem.classList.add("list");
    listContainer.append(newItem);
});
