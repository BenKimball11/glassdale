const contentTarget = document.querySelector(".witnessButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witness") {
        const witnessClickedEvent = new CustomEvent("witnessClicked")
        eventHub.dispatchEvent(witnessClickedEvent)
    }
})

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='witness'>Witness Statements</button>"
}