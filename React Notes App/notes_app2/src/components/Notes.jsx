import React, { useState } from 'react';
import NotesService from '../services/NotesService';

function Notes({liveNote}) {

    const initialValues = {
        title: null, 
        notes: null,
        lastEdit: Date.now(),
    }

    const [editingNote, setEditingNote] = useState(initialValues);

    var handleChange = (event) => {
        setEditingNote({
            ...editingNote,
            id: liveNote.id,
            [event.target.className]: event.target.value,
            lastEdit: Date.now(), 
        })
    }

    var updateNote = (editingNote) => {
        return NotesService.postNotes(editingNote);
    }


    // if liveNote is not selected then display no note selected
    if(liveNote == null) {
        return <div className="noNotes">
                <h3>No Note selected</h3>
                </div>
    }

    return (
        <div className="notes">
            <div className="editNotes">
                <label htmlFor="title"></label>
                <input type="text" className="title" defaultValue={liveNote.title} onChange={(e)=>handleChange(e)}/>
                <label htmlFor="notes"></label>
                <textarea className="notes" defaultValue={liveNote.notes} onChange={(e)=>handleChange(e)} placeholder="Enter notes here... "/>
            </div>
            <div className="noteButton">
                <button onClick={()=>updateNote(editingNote)}>Update</button>
            </div>
        </div>
    );
}

export default Notes;