import React from 'react';

function Notes({noteClicked, handleChange, state, updateNote}) {

    const newInfo = {
        title: state.title,
        notes: state.notes,
        lastEdit: state.lastEdit,
        id: noteClicked === null ? null :  noteClicked.id,
    }

    // if noteClicked is not selected then display no note selected
    if(noteClicked == null) {
        return <div className="noNotes">
                <h3>No Note selected</h3>
                </div>
    }

    return (
        <div className="notes">
            {/* input fields to enter title and notes */}
            <div className="editNotes">
                <label htmlFor="title"></label>
                {/* <TextField value={this.state.first_name} onChange={event => this.handleChange(event, "first_name")} /> */}
                <input type="text" className="title" value={state.title} onChange={(e)=>handleChange(e, "title")}/>
                <label htmlFor="notes"></label>
                <textarea className="notes" value={state.notes} onChange={(e)=>handleChange(e, "notes")} placeholder="Enter notes here... "/>
            </div>
            <div className="noteButton">
                {/* button triggers the update database functionality */}
                <button onClick={()=>updateNote(newInfo)}>Save</button>
            </div>
        </div>
    );
}

export default Notes;