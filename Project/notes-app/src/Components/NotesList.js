import React from 'react'
import Note from './Note'

export default function NotesList({ notes, handleDeleteNote}) {

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
    </div>
)
}
