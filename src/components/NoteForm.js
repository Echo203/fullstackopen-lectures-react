import React from "react";

const NoteForm = ({ newNote, handleNoteSubmit, handleNoteChange }) => {
  return (
    <form onSubmit={handleNoteSubmit}>
      <input onChange={handleNoteChange} value={newNote} />
      <button type="submit">save</button>
    </form>
  );
};

export default NoteForm;
