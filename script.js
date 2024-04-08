const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("List-Container");

function addToDoList () {
    if (inputBox.value === "") {
        alert("Du musst was rein schreiben!");
        
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

