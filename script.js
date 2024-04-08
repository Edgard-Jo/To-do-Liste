const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addToDoList () {
    if (inputBox.value === "") {
        alert("Du musst was rein schreiben!");        
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ""; // Réinitialiser l'input après l'ajout
    }
}