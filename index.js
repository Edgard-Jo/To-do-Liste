const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addToDoList() {
    const inputValue = inputBox.value.trim(); // Trimmen, um Leerzeichen zu entfernen
    
    if (inputValue === "") {
        alert("Du musst etwas eingeben!");
    } else {
        const li = document.createElement("li");
        li.textContent = inputValue;
        listContainer.appendChild(li);
        inputBox.value = ""; // Clear input box after adding task
    }
}
