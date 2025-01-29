// const notescontainer=document.querySelector(".notes-container");
// const createBtn=document.querySelector(".button");
// let notes= document.querySelectorAll(".input-box");

// createBtn.addEventListener("click", ()=>{
//     let inputBox=document.createElement("p");
//     let img=document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src="delete.png";
//     notescontainer.appendChild(inputBox).appendChild(img)
// })

const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button"); // Fixed selection
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box"; // Fixed incorrect class name
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

    // Append the delete button inside the input box
    inputBox.appendChild(img);
    notescontainer.appendChild(inputBox);

    // Add event listener to delete the note
    img.addEventListener("click", () => {
        inputBox.remove();
    });
});

