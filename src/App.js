import React, {useState} from 'react';
import './styles.css';
import Header from './components/Header';
import Planets from './components/Planets';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import Footer from './components/Footer';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
  <>
    <div className="App">
      <Header />
      <Planets />
      <CreateNote 
          onAdd={addNote}/>
      <div className="wrapper">
        {notes.map((noteItem, index) => {
          return (
          <Notes 
          key={index} 
          id={index} 
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote}/>
          );
        })}
      </div>
      <Footer />
    </div>
  </>
  );
}

export default App;
