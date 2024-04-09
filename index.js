const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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
            li.remove(); // Entfernen des li-Elements beim Klicken auf den Löschbutton
        });
        
        li.appendChild(deleteButton); // Hinzufügen des Löschbuttons zum li-Element
        listContainer.appendChild(li);
        inputBox.value = ""; // Clear input box after adding task

        inputBox.focus(); // put focus back to Inout box
    }
}

inputBox.addEventListener("keydown", function(event) {  
   
    if (event.key === "Enter") {   // Überprüfen, ob die gedrückte Taste die Enter-Taste ist 
       // Aufrufen der addToDoList()-Funktion, wenn die Enter-Taste gedrückt wird
        addToDoList();
    }
});
