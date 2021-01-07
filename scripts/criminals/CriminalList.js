import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionDataProvider.js"
import { getOfficers, useOfficers } from "../officers/OfficerDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"



//const contentTarget = document.querySelector("#facilitiesContainer")
const contentTarget = document.querySelector("#criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let facilities = []
let criminalFacilities = []


export const CriminalList = () => {
   getCriminals()
   .then(getFacilities)
   .then(getCriminalFacilities)
   .then(() => {
     criminals = useCriminals()
     facilities = useFacilities()
     criminalFacilities = useCriminalFacilities()

     render(criminals)
   })
} 

// Listen for the custom event you dispatched in ConvictionSelect
const render = (criminalList) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalList.map(
      (criminalObject) => {
        // Step 2 - Filter all relationships to get only ones for this criminal
        const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)
        
        // Step 3 - Convert the relationships to facilities with map()
        const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
    const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
    return matchingFacilityObject
    })
    
    // Must pass the matching facilities to the Criminal component
    return Criminal(criminalObject, matchingFacilities)
     }
  ).join("")
}

eventHub.addEventListener('crimeChosen', event => {

  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
          */
         console.log('crime', event.detail);
         const crimes = useConvictions()
         const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )
         
         const criminalsToFilter = criminals.slice()
         const matchingCriminals = criminalsToFilter.filter( (criminal) => criminal.conviction === crime.name)
         
         render(matchingCriminals)
        }
      })


eventHub.addEventListener('officerSelected', event => {

  // Use the property you added to the event detail.
  if (event.detail.selectedOfficer !== "0"){
      /*
          Filter the criminals application state down to the people that committed the crime
      */
      console.log('officer', event.detail);
      const officers = useOfficers()
      const officer = officers.find( (officer) => officer.id === parseInt(event.detail.selectedOfficer) )

      const criminalsToFilter = criminals.slice()
      const matchingCriminals = criminalsToFilter.filter( criminal => criminal.arrestingOfficer === officer.name)

      render(matchingCriminals)
  }
})
/* export const Criminallist = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}
 */

