import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {


        const author = document.querySelector("#author").value
        const text = document.querySelector("#text").value
        const suspect = document.querySelector("#suspect").value

        // Make a new object representation of a note
        const newNote = {
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
       <input type="text" id="author" placeholder="author name">
       <textarea id="text" placeholder="note text"></textarea>
       <input type="text" id="suspect" placeholder="suspect name"> 
        <button id="saveNote">Save Note</button>`
    
}

export const NoteForm = () => {
    render()
}








/* `<fieldset class="journal-date">
<label for="journalDate">Date of entry</label>
<input type="date" name="journalDate" id="./styles/main.css">
</fieldset>
<fieldset class="journal-concept">
<label for="journalConcept">Concepts covered</label>
<input type="" name="journalConcept" id="./styles/main.css">
</fieldset>
<fieldset class="journal-entry">
<label for="journalEntry">Journal entry</label>
<input type="entry" name="journalEntry" id="./styles/main.css">
</fieldset>
<fieldset class="journal-mood">
<label for="journalMood">Mood for the day</label>  
<select id="mood" name="mood">
    <option value="great">Great</option>
    <option value="good">good</option>
    <option value="needs work">Needs work</option>
</select>
</fieldset>
<button type="record journal entry" value="Record Journal Entry">Record Journal Entry</button>
</section>` */