import React from 'react';
import {Link} from 'react-router-dom'

function Thanks(props) {
    return (
        <div>
            <h3>Thanks for review!!</h3>
            <Link to="/"><button>Back to Notes</button></Link>
        </div>
    );
}

export default Thanks;