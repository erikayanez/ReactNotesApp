import React from 'react'
import Note from './Note'
import AddNote from './AddNote';

export default function NotesList({ notes, handleDeleteNote, handleAddNote}) {

    return (
    <div className='notes-list'>
        {Note.map((note)=> (
        <Note 
        id={note.id}
        text={note.text}
        date={note.date}
        handleDeleteNote={handleDeleteNote}
        />
        ))}
        <AddNote handleAddNote={handleDeleteNote} />
    </div>
)
}
