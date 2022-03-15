const AddNote = () => {
	return (
		<div className='note new'>
			<textarea 
				rows='8' cols='10' placeholder="Enter your new note...">
			</textarea>
			<div className='note-footer'>
				<small>200 Remaining</small>
				<button className='save'>Save Note</button>
			</div>
		</div>
	)
}

export default AddNote;