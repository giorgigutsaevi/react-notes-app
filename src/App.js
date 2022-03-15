import { useState } from "react";
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
  }]);

  return (
  <div className='container'>
    <NotesList />
  </div>
  )
}

export default App;