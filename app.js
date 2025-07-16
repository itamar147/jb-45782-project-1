function addNote(event) {
    event.preventDefault(); 
    const data = collectDataFromForm();
    const newNote = generateNote(data);
    injectNoteToDOM(newNote);
    // saveNoteToLocalStorage(data);
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
    
    const newNote =
        `<div style="background-image: url(images/notebg.png);">
            <p>${data.textDescription}</p>
            <p>${data.submissionDate}</p>
            <p>${data.submissionTime}</p>
        </div>`

    return newNote;
}

function injectNoteToDOM(newNote) {
    console.log("check note")
    document.getElementById("noteContainer").innerHTML += newNote
}

function clearForm(){
    document.getElementById("taskTable").reset();
}

function clearForm(){
    const form = document.getElementById("taskTable");
    if(form && typeof form.reset === "function"){
        form.reset();
    } else {
        const type=typeof document.getElementById("tasktable")
        console.log(`tasktable is ${type} `)
        console.error("taskTable is not a form or does not exist");
        
    }
}