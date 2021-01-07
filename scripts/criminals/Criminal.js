//This is the HTMLConverter

/* export const Criminal = (criminalObj) => {
    return `
    <article class="criminal">
    <h2>${criminalObj.name}</h2>
    <div>Crime: ${criminalObj.conviction}</div>
    <div>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </article>    
    
    `
} */

export const Criminal = (criminalObj, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObj.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObj.conviction}</p>
            <p>Arrested by ${criminalObj.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObj.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObj.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObj.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
        </div>
    </div>
    `
}