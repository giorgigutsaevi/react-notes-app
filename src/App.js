import { useState } from "react";
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
  
  const today = new Date();
  const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "Sample note text",
    date: date,
  }]);

  return (
  <div className='container'>
    <NotesList />
  </div>
  )
}

export default App;