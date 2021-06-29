import React, { Component } from 'react';
import NotesService from '../services/NotesService';
import Notes from './Notes';
import NotesPostComponent from './NotesPostComponent';
import Quotes from './Quotes';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
           notesTable: [],
           noteClicked: null,
           title: "",
           notes: "",
           lastEdit: "",
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
        // axios in note service has the delete functionality
        NotesService.deleteNote(idToDelete);
        // reloading the page so that the user can see the new added note
        window.location.reload();
    }

    clickedNote = (clicked) => {
        // Looping through the array in state and finding the note that matches the clicked on note 
        const response = this.state.notesTable.find((note) => note.id === clicked);
        // setting state with the clicked on note's object so that it can be used in the Notes component
        this.setState({
            noteClicked: response,
            title: response.title,
            notes: response.notes,
            lastEdit: Date.now()
        })
    }

    // handle change listens for when user type something in the input and textarea boxes
    // and updates state accordingly
    handleChange = (event, input) => {
        // updating state title key with what is typed in the input field
        if(input === "title") {
            this.setState({title: event.target.value})
        }
        // updating state notes key with what is typed in the text area
        if(input === "notes") {
            this.setState({notes: event.target.value})
        }
        // updating the time at which the edit is made in state so that it can be displayed in the DOM
        this.setState({
            lastEdit: Date.now(),
        })
    }
    
    // function to update note in database, takes an object
    // which is the note clicked id and the contents typed in the note
    updateNote = (updateInfo) => {
        NotesService.updateNote(updateInfo)
        // updating state again so that the navbar updates on click of save button
        NotesService.getNote().then((response)=>{
            this.setState({
                notesTable: response.data
            })
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
                        {/* conditional to not show the full body. This will only show the first 30 characters then add on ... to the end
                        of it.  */}
                        <p>{note.notes && note.notes.substr(0, 30) + "..."}</p>
                        {/* at the last modified statement, we instantiate a new date in the US format */}
                        {/* Also make the hour and minute into 2 digit number do it is not overcrowded */}
                        <p>{`Last edited: ${note.lastEdit}`}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="noteTab">
                {/* passing the clicked on note as prop to Notes component */}
                <Notes noteClicked={this.state.noteClicked}   handleChange={this.handleChange} state={this.state} updateNote={this.updateNote}/>
            </div>
            <div className="quotesDiv">
                {/* Rendering jokes on DOM that has the api call */}
                <Quotes />
            </div>

        </div>
    );
    }
}



export default NavBar;
