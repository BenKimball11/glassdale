import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")
//Doesn't matter what the varible is called ex: visability or taco
let visible = false;


eventHub.addEventListener("showNotesClicked", () => {
   
    if(visible === false) {
        NoteList()
        visible = true
    } else {
        contentTarget.innerHTML = ""
        visible = false
    }
})
eventHub.addEventListener("noteStateChanged", () => {
    if (visible === true){
        
    NoteList()
    }

})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map((note) => NoteHTMLConverter(note)).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}
// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}