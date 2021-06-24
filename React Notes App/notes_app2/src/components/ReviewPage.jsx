import React from 'react';
import { Link } from 'react-router-dom';

function ReviewPage(props) {
    return (
        <div className="linkToReviewPage">
            <Link to="/review"><button>Leave a review</button></Link>
        </div>
    );
}

export default ReviewPage;