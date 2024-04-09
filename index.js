const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addToDoList() {
<<<<<<< HEAD
    const inputValue = inputBox.value.trim();
    
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
        inputBox.value = "";
        inputBox.value = ""; // Clear input box after adding task
=======
  const inputValue = inputBox.value.trim(); // Trimmen, um Leerzeichen zu entfernen
>>>>>>> 1942a0b0689f2a689938696572822734c0720681

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

<<<<<<< HEAD

inputBox.addEventListener("keydown", function(event) {  
   
    if (event.key === "Enter") {   // Überprüfen, ob die gedrückte Taste die Enter-Taste ist 
       // Aufrufen der addToDoList()-Funktion, wenn die Enter-Taste gedrückt wird
        addToDoList();
    }
=======
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
>>>>>>> 1942a0b0689f2a689938696572822734c0720681
});
