import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = (props) => {
	return(
		<div className="notes-list">
			{props.notes.map((note) => (
				<Note 
					key={note.id}
					id={note.id}
					text={note.text}
					date={note.date}
				/>
				))}
				<AddNote/>
		</div>
	)
}

export default NotesList;