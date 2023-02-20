import { useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from 'nanoid'
import Search from "./Components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "18/02/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "19/02/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "20/02/2023"
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "21/02/2023"
    },
  ]);

  const [searchText,setSearchText] = useState("")

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !== id );
  setNotes(newNotes); 
}
 
  return (
    <div className="container">
      <Search  handleSearchNote={searchText}/>
      <NotesList 
      notes={notes} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}/>
    </div>
  );
};

export default App;