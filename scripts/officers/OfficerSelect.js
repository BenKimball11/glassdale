import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        // Get the name of the selected officer
        //const selectedOfficer = event.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficer: event.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
    .then( () => {
        const officers = useOfficers()
        render(officers)
    })
}

const render = officersCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${
            officersCollection.map(officerObj => {
                const officerName = officerObj.name
            return `<option value=${officerObj.id}>
            ${officerName}
            </option>`
            })
        }
    </select>
    `
}