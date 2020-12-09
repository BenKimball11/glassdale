import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNotesButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import "./alibis/alibiList.js"
import "./alibis/ShowAlibiButton.js"


ShowNotesButton()
OfficerSelect()
CriminalList()
ConvictionSelect()
NoteForm()