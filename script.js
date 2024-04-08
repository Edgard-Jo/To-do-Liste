const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("List-Container");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("Du musst was rein schreiben!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
  }
}
