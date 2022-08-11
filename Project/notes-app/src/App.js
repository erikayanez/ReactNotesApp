import { useState } from 'react'
import { nanoid} from 'nanoid'
import NotesList from './Components/NotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "10/08/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "10/08/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "10/08/2022"
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "10/08/2022"
    },
  ])
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
