const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];
const inputToDo = document.querySelector("#inputToDo");
const injectToDo = document.querySelector("#injectToDo");
const todoList = document.querySelector("#todo-list");

const createEventListener = concatedValue => {
  let listItem = document.querySelector("#" + concatedValue);
  listItem.addEventListener("click", () => {
    listItem.className = "done";
  });
};

const appendIntoUL = (listItemTag, listItemContent) => {
  listItemTag.appendChild(listItemContent);
  todoList.appendChild(listItemTag);
};

tasks.forEach(value => {
  const listItemTag = document.createElement("li");
  const listItemContent = document.createTextNode(value);
  appendIntoUL(listItemTag, listItemContent);

  const concatedValue = value.replace(/\s/g, "");
  listItemTag.setAttribute("id", concatedValue);
  createEventListener(concatedValue);
});

injectToDo.addEventListener("click", () => {
  const toDo = inputToDo.value;
  const listItemTag = document.createElement("li");
  const listItemContent = document.createTextNode(toDo.toString());
  appendIntoUL(listItemTag, listItemContent);

  const concatedValue = toDo.toString().replace(/\s/g, "");
  listItemTag.setAttribute("id", concatedValue);
  createEventListener(concatedValue);
});

inputToDo.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    const toDo = inputToDo.value;
    const listItemTag = document.createElement("li");
    const listItemContent = document.createTextNode(toDo.toString());
    appendIntoUL(listItemTag, listItemContent);

    const concatedValue = toDo.toString().replace(/\s/g, "");
    listItemTag.setAttribute("id", concatedValue);
    createEventListener(concatedValue);
  }
});
