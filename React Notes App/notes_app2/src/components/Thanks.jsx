import React from 'react';
import {Link} from 'react-router-dom'

function Thanks() {
    return (
        <div className="thanks">
            <h3>Thanks for review!!</h3>
            {/* link to go back to notes ie NavBar component that has the notes */}
            <Link to="/"><button>Back to Notes</button></Link>
        </div>
    );
}

export default Thanks;