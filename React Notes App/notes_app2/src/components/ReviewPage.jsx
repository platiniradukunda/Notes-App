import React from 'react';
import { Link } from 'react-router-dom';

function ReviewPage(props) {
    return (
        <div>
            <Link to="/review"><p>Leave a review</p></Link>
        </div>
    );
}

export default ReviewPage;