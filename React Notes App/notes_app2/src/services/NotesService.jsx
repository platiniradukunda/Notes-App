import axios from "axios";

const notes_url = "http://localhost:8080/notes";

class NotesService {
    // method to get notes from DB
    getNote() {
        return axios.get(notes_url)
    }

    // method to post notes to DB
    postNotes(itemsInState) {
        return axios.post(notes_url, itemsInState)
    }

    // method to delete notes from DB
    deleteNote(id) {
        return axios.delete(notes_url+id)
    }

    // updating DB
    updateNote(newInfo) {
        return axios.put(notes_url, newInfo)
    }
}

export default new NotesService();