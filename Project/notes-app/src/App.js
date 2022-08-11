import { useState, useEffect } from 'react'
import { nanoid} from 'nanoid'
import NotesList from './Components/NotesList';
import Search from './Components/Search';
import Header from './Components/Header';

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
  ]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList 
      notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText)
        )} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  )
}

export default App;
