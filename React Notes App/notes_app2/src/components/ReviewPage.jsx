import React from 'react';
import { Link } from 'react-router-dom';

function ReviewPage(props) {
    return (
        <div className="linkToReviewPage">
            {/* link to review page that has post functionality */}
            <Link to="/review"><button>Leave a review</button></Link>
        </div>
    );
}

export default ReviewPage;