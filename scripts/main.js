import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNotesButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import "./alibis/alibiList.js"
import "./alibis/ShowAlibiButton.js"
import { WitnessList } from './witnesses/WitnessList.js';
import { ShowWitnessButton } from './witnesses/ShowWitnessButton.js';


WitnessList()
ShowWitnessButton()
ShowNotesButton()
OfficerSelect()
CriminalList()
ConvictionSelect()
NoteForm()