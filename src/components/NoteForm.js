import React, { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const handleNoteChange = ({ target }) => setNewNote(target.value)
  const handleNoteSubmit = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    })

    setNewNote('')
  }
  return (
    <div className='formDiv'>
      <h2>Create a new note</h2>
      <form onSubmit={handleNoteSubmit}>
        <input onChange={handleNoteChange} value={newNote} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm
