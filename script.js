const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button"); 

// Function to save notes to Local Storage
function saveNotes() {
    const notes = Array.from(document.querySelectorAll(".input-box")).map(note => note.innerText);
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to load saved notes from Local Storage
function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => createNote(noteText));
}

// Function to create a new note
function createNote(text = "") {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box"; 
    inputBox.setAttribute("contenteditable", "true");
    inputBox.innerText = text; // Load saved text
    img.src = "delete.png";

    inputBox.appendChild(img);
    notescontainer.appendChild(inputBox);

    inputBox.addEventListener("input", saveNotes); // Save on edit

    img.addEventListener("click", function() {
        inputBox.remove();
        saveNotes(); // Save after deletion
    });
}

// Add new note when button is clicked
createBtn.addEventListener("click", function() {  
    createNote(); // Call function to create a new note
});

// Load saved notes when the page loads
loadNotes();
