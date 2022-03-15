import { useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {

  const today = new Date();
  const date = today.toLocaleDateString()

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample note text",
      date: date,
    }
  ]);

  const [searchText, setSearchText] = useState("");

  const toAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <Search 
        handleSearchNote={setSearchText}
      />
      <NotesList
        notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
        handleAddNote={toAddNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App;