const addNoteButton = document.querySelector(".fa-plus-circle");
const container = document.querySelector(".container");
const colors = ["fec871", "fd9a6e", "e3ed8e", "b491fb", "56d9f2"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let count = 0;

function deleteNote(note){
    let b = document.getElementById(`${note.id}`);
    b.remove();
}

function addNote(){
    let title = prompt("Enter note title:");
    let content = prompt("Enter note content:");
    let date = new Date();
    const random = Math.floor(Math.random() * colors.length);

    let note = document.createElement("div");
    note.classList.add("note");
    count += 1;
    note.id = count;
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
    footerDate.textContent = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    let footerIcons = document.createElement("div");
    footerIcons.classList.add("footer-icons");

    let trashButton = document.createElement("i");
    trashButton.classList.add("fas", "fa-trash");

    footerIcons.appendChild(trashButton);
    noteFooter.appendChild(footerDate);
    noteFooter.appendChild(footerIcons);
    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(noteFooter);
    container.appendChild(note);
    
    trashButton.addEventListener('click', () => {
        deleteNote(note);
    });
}

addNoteButton.addEventListener("click", addNote);
