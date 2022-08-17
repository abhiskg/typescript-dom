const lists = document.querySelectorAll(".list") as NodeListOf<HTMLLIElement>;
const listContainer = document.querySelector(
  "#list-container"
) as HTMLUListElement;

// lists.forEach((list) => {
//   list.addEventListener("click", (e) => {
//     (e.target as HTMLLIElement).parentNode?.removeChild(
//       e.target as HTMLLIElement
//     );
//   });
// });

listContainer.addEventListener("click", (e) => {
  (e.target as HTMLLIElement).parentNode?.removeChild(
    e.target as HTMLLIElement
  );
});

const addItem = document.querySelector("#add-item") as HTMLButtonElement;

addItem.addEventListener("click", () => {
  const newItem = document.createElement("li") as HTMLLIElement;
  newItem.textContent = "New Item Added";
  newItem.classList.add("list");
  listContainer.append(newItem);
});
