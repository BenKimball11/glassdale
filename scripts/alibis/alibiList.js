import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dialogTest")
const dialogToggle = document.getElementById("myDialog"); 

dialogToggle.close()

eventHub.addEventListener("showAlibiClicked", customEvent => {
    let criminals = useCriminals()
    const criminal = criminals.find( (criminal) => criminal.id === customEvent.detail.criminalID)
    
    contentTarget.innerHTML = ""
    dialogToggle.close()

    for (let i=0; i < criminal.known_associates.length; i++) {
        contentTarget.innerHTML += `<div class="note__alibi"><b>Known Associate:</b> ${ criminal.known_associates[i].name }  <p><b>Alibi:</b> ${criminal.known_associates[i].alibi }<br><br></div>`
    }
    
    contentTarget.innerHTML += `<button id="closeDialog">Close</button>`
    dialogToggle.show()
    
})

eventHub.addEventListener("closeDialogClicked", customEvent => {
    dialogToggle.close()
    contentTarget.innerHTML = ""
})


































/*  import { alibiHTMLConverter } from "./alibi.js";

// Selectors
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".alibisContainer");

// ------- LISTEN FOR ALIBI BUTTON (START) -------
eventHub.addEventListener("alibisSelected", event =>{
    // Save the criminal name to a local variable
    const criminalChosen = event.detail.theCriminalChosen;
    
    // Save the associates and their alibis in HTML to a local variable
    const alibiList = event.detail.theAlibisChosen.map(associate => alibiHTMLConverter(associate));

    // Convert the criminal name to HTML and attach the associates and their alibis after it in the DOM.
    contentTarget.innerHTML = `
        <section class="criminalSelected">
            <h2 class="criminalSelected__name">${criminalChosen} (Associates)</h2>
        </section>
        ${alibiList.join("")}
    `;
});  */

/* //import { getNotes, useNotes } from "./NoteDataProvider.js";
import { alibiHTMLConverter } from "./alibi.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".alibiList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".alibiscontainer")
//Doesn't matter what the varible is called ex: visability or taco
let visiability = false;


eventHub.addEventListener("showAlibiClicked", () => {
   
    if(visiability === false) {
        AlibiList()
        visiability = true
    } else {
        contentTarget.innerHTML = ""
        visiability = false
    }
})
eventHub.addEventListener("alibiStateChanged", () => {
    if (visiability === true){
        
    AlibiList()
    }

})

const render = (alibiArray) => {
    const allAlibisConvertedToStrings = alibiArray.map((alibi) => alibiHTMLConverter(alibi)).join("")

    contentTarget.innerHTML = allAlibisConvertedToStrings
}
// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const AlibiList = () => {
    getAlibis()
        .then(() => {
            const allAlibis = useAlibis()
            render(allAlibis)
        })
} */