//almost exaclty criminal list
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */



import { getConvictions, useConvictions } from "./ConvictionDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})



export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then( () => { 
    const convictions = useConvictions()
    render(convictions)
})
}


const render = convictionsCollection => {
   
     contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictionObj => {
                    const convictionName = convictionObj.name
                return `<option value=${convictionObj.id}>
                ${convictionName}
                </option>`
                })
            }
        </select>
    `
}













/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.

const eventHub = document.querySelector(".filters__incarceration")
//const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
 */






















//const render = convictionsCollection => {
/*     contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ... you wrote awesome code here ...
        </select>
    `
} */


/* export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
} */