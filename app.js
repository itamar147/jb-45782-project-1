
const NOTE_KEY_NAME = '[]'

function addNote(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newNote = generateNote(data);
    injectNoteToDOM(newNote);
    saveNoteToLocalStorage(data);
    clearForm();
}

function collectDataFromForm() {
    const textDescription = document.getElementById("taskDescription").value;
    const submissionDate = document.getElementById("submissionDate").value;
    const submissionTime = document.getElementById("submissionTime").value;

    return {
        textDescription,
        submissionDate,
        submissionTime,
    };
}

function generateNote(data) {

    const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
    // console.log(`${noteJSON}`);
    const notes = JSON.parse(noteJSON);
    let id = notes.length;
    // console.log(` the length is${id}`);


    const newNote =
        `<div id='${id}' class="fadeIn" style="background-image: url(images/notebg.png);">
            <button class="deleteButton" onclick="deleteNote(${id})"><span class="glyphicon glyphicon-remove"></span> </button>
            <p id=text>${data.textDescription}</p>
            <p>${data.submissionDate}</p>
            <p>${data.submissionTime}</p>
            
        </div>`

    return newNote;
}

// function generateOldNote(data) {

//     const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
//     console.log(`${noteJSON}`);
//     const notes = JSON.parse(noteJSON);
//     let id = notes.length;
//     console.log(` the length is${id}`);


//     const newNote =
//         `<div id='${id}' style="background-image: url(images/notebg.png);">
//             <button class="deleteButton" onclick="deleteNote(${id})"><span class="glyphicon glyphicon-remove"></span> </button>
//             <p id=text>${data.textDescription}</p>
//             <p>${data.submissionDate}</p>
//             <p>${data.submissionTime}</p>
            
//         </div>`

//     return newNote;
// }



function injectNoteToDOM(newNote) {
    // console.log("check note")       
    // document.getElementById("noteContainer").innerHTML += newNote         קוד קודם - מרנדר את כל הפתקים ונותן אנימציה לכולם ביחד
    const container = document.getElementById("noteContainer");
    container.insertAdjacentHTML("beforeend", newNote);
}

function clearForm() {
    document.getElementById("taskForm").reset();
}

function saveNoteToLocalStorage(data) {
    const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
    const notes = JSON.parse(noteJSON);
    notes.push(data);
    localStorage.setItem(NOTE_KEY_NAME, JSON.stringify(notes));
}

function loadNotesFromStorage() {
    const noteJSON = localStorage.getItem(NOTE_KEY_NAME);
    if (noteJSON) {
        const notes = JSON.parse(noteJSON);
        const container = document.getElementById("noteContainer");
        container.innerHTML = "";
        for (const note of notes) {
            const newNote = generateNote(note);
            injectNoteToDOM(newNote);
        }
    }
}



function deleteNote(id) {

    const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
    let notes = JSON.parse(noteJSON);
    notes.splice(id-1, 1);
    localStorage.setItem(NOTE_KEY_NAME, JSON.stringify(notes))
    loadNotesFromStorage(notes)


}

loadNotesFromStorage()