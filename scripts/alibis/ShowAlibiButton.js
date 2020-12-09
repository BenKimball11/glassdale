//const contentTarget = document.querySelector(".AlibiListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const matchingCriminal = clickEvent.target.id.split("--")
        const criminalID = parseInt(matchingCriminal[1])

        const customEvent = new CustomEvent("showAlibiClicked", {
            detail: {
                criminalID: criminalID
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeDialog") {
        const customEvent = new CustomEvent("closeDialogClicked", {
    })
        eventHub.dispatchEvent(customEvent)
    }
})
export const ShowAlibisButton = () => {
    contentTarget.innerHTML = "<button id='showAlibis'>Associate Alibis</button>"
} 