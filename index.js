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
        deleteButton.addEventListener("click", function() {
            if (li.classList.contains("checked")) {
                countCheckedTasks(); // Aktualisiere den Zähler, wenn eine Aufgabe gelöscht wird
            }
            li.remove(); // Entfernen des li-Elements beim Klicken auf den Löschbutton
        });
        
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
            countCheckedTasks(); // Aktualisiere den Zähler, wenn eine Aufgabe angekreuzt wird
        });

        li.appendChild(deleteButton); // Hinzufügen des Löschbuttons zum li-Element
        listContainer.appendChild(li);
        inputBox.value = ""; // Clear input box after adding task

        inputBox.focus(); // put focus back to Input box

        countCheckedTasks(); // Aktualisiere den Zähler, wenn eine neue Aufgabe hinzugefügt wird
    }
}

inputBox.addEventListener("keydown", function(event) {  
    if (event.key === "Enter") {   // Überprüfen, ob die gedrückte Taste die Enter-Taste ist 
        // Aufrufen der addToDoList()-Funktion, wenn die Enter-Taste gedrückt wird
        addToDoList();
    }
});
