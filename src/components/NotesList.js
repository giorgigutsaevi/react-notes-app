import Note from "./Note";

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
		</div>
	)
}

export default NotesList;