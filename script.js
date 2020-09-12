const addNoteButton = document.querySelector(".fa-plus-circle");
const container = document.querySelector(".container");
const colors = ["fec871", "fd9a6e", "e3ed8e", "b491fb", "56d9f2"];

function addNote(){
    let title = prompt("Enter note title:");
    let content = prompt("Enter note content:");
    let date = "Sep 12, 2020";
    const random = Math.floor(Math.random() * colors.length);

    let note = document.createElement("div");
    note.classList.add("note");
    note.style.backgroundColor = `#${colors[random]}`;

    let noteTitle = document.createElement("div");
    noteTitle.classList.add("note-title");
    noteTitle.textContent = title;

    let noteContent = document.createElement("p");
    noteContent.classList.add("note-content");
    noteContent.textContent = content;

    let noteFooter = document.createElement("div");
    noteFooter.classList.add("note-footer");

    let footerDate = document.createElement("div");
    footerDate.classList.add("footer-date");
    footerDate.textContent = date;

    let footerIcons = document.createElement("div");
    footerIcons.classList.add("footer-icons");

    //let minusSquareButton = document.createElement("i");
    //minusSquareButton.classList.add("fas", "fa-minus-square");

    //let penSquareButton = document.createElement("i");
    //penSquareButton.classList.add("fas", "fa-pen-square");

    let trashButton = document.createElement("i");
    trashButton.classList.add("fas", "fa-trash");

    //footerIcons.appendChild(minusSquareButton);
    //footerIcons.appendChild(penSquareButton);
    footerIcons.appendChild(trashButton);
    noteFooter.appendChild(footerDate);
    noteFooter.appendChild(footerIcons);
    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(noteFooter);
    container.appendChild(note);
}

addNoteButton.addEventListener("click", addNote);