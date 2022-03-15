import {MdSearch} from 'react-icons/md'

const Search = (props) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em'/>
			<input 
				type='text' 
				placeholder="Search note.." 
				onChange={(evt)=>{
					props.handleSearchNote(evt.target.value)
				}}
			/>
		</div>
	)
}

export default Search;