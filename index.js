const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addToDoList() {
    const inputValue = inputBox.value.trim();
    
    if (inputValue === "") {
        alert("Du musst etwas eingeben!");
    } else {
        const li = document.createElement("li");
        li.textContent = inputValue;
        
        // Erstellen des Löschsymbols (X)
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌"; // Hier kannst du auch ein Bild oder ein anderes Symbol verwenden
        
        // Füge dem Listenelement das Löschsymbol hinzu
        li.appendChild(deleteButton);
        
        // Füge dem Löschsymbol einen Event-Listener hinzu
        deleteButton.addEventListener("click", function() {
            listContainer.removeChild(li); // Entferne das Listenelement beim Klicken auf das Löschsymbol
        });
        
        listContainer.appendChild(li);
        inputBox.value = "";
    }
}

