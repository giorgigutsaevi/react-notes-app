import { useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";


const App = () => {

  const today = new Date();
  const date = today.toLocaleDateString()

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample note text",
      date: date,
    },
    {
      id: nanoid(),
      text: "Sample note text",
      date: date,
    }
  ]);

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
 
  return (
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={toAddNote}
      />
    </div>
  )
}

export default App;