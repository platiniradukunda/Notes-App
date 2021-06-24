import React, { Component } from 'react';
import NotesService from '../services/NotesService';
import Notes from './Notes';
import NotesPostComponent from './NotesPostComponent';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
           notesTable: [],
           noteClicked: null,
        }
    }

    componentDidMount() {
        // getting the existing notes from the database
        NotesService.getNote().then((response)=>{
            this.setState({
                notesTable: response.data
            })
        })
    }

    deleteNote = (id) => {
        // deleting the note based on id using backend
        let idToDelete = `/${id}`;
        NotesService.deleteNote(idToDelete);
        window.location.reload(false);
    }

    clickedNote = (clicked) => {
        // Looping through the array in state and finding the note that matches the clicked on note 
        const response = this.state.notesTable.find((note) => note.id === clicked);
        // setting state with the clicked on note's object so that it can be used in the Notes component
        this.setState({
            noteClicked: response,
        })
    }

    render () {
    return (
        <div className="mainContainer">
            <div className="navbar">
                {/* this the component that has the post functionality */}
                <NotesPostComponent/>
                <div className="listNotes">
                    {/* mapping through the array in state to render to the DOM */}
                    {this.state.notesTable.map((note, index)=>(
                    <div className="individualNote" key={index} onClick={()=>{this.clickedNote(note.id)}}>
                        <div className="titleAndDelete">
                         <h4>{note.title}</h4>
                         {/* button has an onClick button to delete  */}
                         <button onClick={()=>this.deleteNote(note.id)}>Delete</button>
                        </div>
                        {/* conditional to not show the full body. This will only show the first 100 characters then add on ... to the end
                        of it.  */}
                        <p>{note.notes && note.notes.substr(0, 100) + "..."}</p>
                        {/* at the last modified statement, we instantiate a new date in the US format */}
                        {/* Also make the hour and minute into 2 digit number do it is not overcrowded */}
                        <p>{`Last edited: ${note.lastEdit}`}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="noteTab">
                {/* passing the clicked on note as prop to Notes component */}
                <Notes liveNote={this.state.noteClicked}/>
            </div>
        </div>
    );
    }
}



export default NavBar;
