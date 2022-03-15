import { useState } from "react";

const AddNote = (props) => {
	const [noteText, setNoteText] = useState("");

	const handleChange = (evt) => {
		setNoteText(evt.target.value);
	}

	const handleClick = () => {
		if(noteText.trim().length > 0){
			props.handleAddNote(noteText);
			setNoteText("");
		}
	}

	return (
		<div className='note new'>
			<textarea
					rows='8' 
					cols='10' 
					placeholder="Enter your new note..."
					onChange={handleChange}
					value={noteText}
				>
			</textarea>
			<div className='note-footer'>
				<small>200 Remaining</small>
				<button className='save' onClick={handleClick}>Save Note</button>
			</div>
		</div>
	)
}

export default AddNote;