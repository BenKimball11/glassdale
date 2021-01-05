import { getWitnesses, useWitnesses } from './WitnessDataProvider.js'
import { Witness } from './Witnesses.js'
import { CriminalList } from '../criminals/CriminalList.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")
//const witnessToggle = document.getElementById("showWitness"); 

let witnessShown = false;
eventHub.addEventListener('witnessClicked', () => {
    let theWitnesses = useWitnesses()
    if (witnessShown === false) {
        render(theWitnesses)
        witnessShown = true

    } else {
        CriminalList()
        witnessShown = false;
    }
    
    
})

const render = witnessCollection => {
    contentTarget.innerHTML = ""
    
    for (const witnessObj of witnessCollection) {
        const filterWitnessHTML = Witness(witnessObj)
        contentTarget.innerHTML += filterWitnessHTML

    }
}

export const WitnessList = () => {
    getWitnesses().then(() => {
        const theWitnesses = useWitnesses()
        // render(theWitnesses)
    })   
}