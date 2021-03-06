import React, { Component } from 'react';
import NotesService from '../services/NotesService';

class NotesPostComponent extends Component {
    constructor() {
        super()
        this.state={
            id: "",
            title: "Untitled Note",
            notes: "",
            lastEdit: Date.now(),
        }
    }

    addNote = () => {
        NotesService.postNotes(this.state)
        window.location.reload();
    }


    render() {
        return (
            <div className="navBarTitle">
                    <h1>Notes</h1>
                    <button onClick={this.addNote}>Add</button>
            </div>
        );
    }
}

export default NotesPostComponent;