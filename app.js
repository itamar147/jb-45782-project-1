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
        `<div class="fadeIn" style="background-image: url(images/notebg.png);">
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

function clearForm(){
    document.getElementById("taskForm").reset();
}

// function clearForm(){
//     const form = document.getElementById("taskForm");
//     if(form && typeof form.reset === "function"){
//         form.reset();
//     } else {
//         const type=typeof document.getElementById("taskForm")
//         console.log(`taskForm is ${type} `)
//         console.error("taskForm is not a form or does not exist");
        
//     }
// }