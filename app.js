
const NOTE_KEY_NAME = '[]'
animate=1;

function addNote(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newNote = generateNote(data, animate);
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

function generateNote(data, animation = true) {

    const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
    const notes = JSON.parse(noteJSON);
    let id = notes.length -1;
    console.log(`${id}`)
    
    const newNote =
        `<div id='${id}' class= "${animation? "fadeIn note": "note"}"  style="background-image: url(images/notebg.png);">
            <button class="deleteButton" onclick="deleteNote(${id})"><span class="glyphicon glyphicon-remove"></span> </button>
            <p id=text>${data.textDescription}</p>
            <p>${data.submissionDate}</p>
            <p>${data.submissionTime}</p>
        
            
        </div>`

    return newNote;
}

function generateOldNote(data) {

    const noteJSON = localStorage.getItem(NOTE_KEY_NAME) || "[]";
    const notes = JSON.parse(noteJSON);
    let id = notes.length;
    
    const newNote =
        `<div id='${id}'style="background-image: url(images/notebg.png);" class="note">
            <button class="deleteButton" onclick="deleteNote(${id})"><span class="glyphicon glyphicon-remove"></span> </button>
            <p id=text>${data.textDescription}</p>
            <p>${data.submissionDate}</p>
            <p>${data.submissionTime}</p>
            
        </div>`

    return newNote;
}






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
            const animation=false;
            const newNote = generateNote(note, false );
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