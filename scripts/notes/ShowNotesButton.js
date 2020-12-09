const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const showNotesClickedEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(showNotesClickedEvent)
    }
})

export const ShowNotesButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Toggle Notes</button>"
}