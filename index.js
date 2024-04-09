const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deletedTasks = []; // Array zum Speichern der gelöschten Aufgaben

// Funktion zum Zählen der abgehakten Aufgaben
function countCheckedTasks() {
    const checkedTasks = document.querySelectorAll("ul li.checked");
    const count = checkedTasks.length;
    document.getElementById("counter").textContent = count;
}

function addToDoList() {
  const inputValue = inputBox.value.trim(); // Trimmen, um Leerzeichen zu entfernen

  if (inputValue === "") {
    alert("Du musst etwas eingeben!");
  } else {
    const li = document.createElement("li");
    li.textContent = inputValue;

    // Erstellen des Löschbuttons
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "&times;"; // Das 'x'-Symbol für den Löschbutton
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
      li.remove(); // Entfernen des li-Elements beim Klicken auf den Löschbutton
    });

    li.appendChild(deleteButton); // Hinzufügen des Löschbuttons zum li-Element
    listContainer.appendChild(li);
    inputBox.value = ""; // Clear input box after adding task

    inputBox.focus(); // put focus back to Inout box
  }
}

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Überprüfen, ob die gedrückte Taste die Enter-Taste ist
    // Aufrufen der addToDoList()-Funktion, wenn die Enter-Taste gedrückt wird
    addToDoList();
  }
});

listContainer.parentElement.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const currentTimeFooter = document.getElementById("current-time-footer");

function updateCurrentTimeFooter() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  currentTimeFooter.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Aktualisieren Sie die Uhrzeit alle Sekunde
setInterval(updateCurrentTimeFooter, 1000);

// Rufen Sie die Funktion einmal auf, um die Uhrzeit sofort anzuzeigen
updateCurrentTimeFooter();

