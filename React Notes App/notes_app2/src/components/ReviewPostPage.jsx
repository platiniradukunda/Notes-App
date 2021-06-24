import React, { Component } from 'react';
import ReviewService from '../services/ReviewService';
import { Link } from 'react-router-dom';

class ReviewPostPage extends Component {
    constructor() {
        super()
        this.state={
            name: "",
            review: "",
        }
    }

    addReview = () => {
        ReviewService.postReview(this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
        window.location.reload(false);
    }

    render() {
        return (
            <div className="review">
                <div className="back">
                    <Link to="/notes"><button>Notes</button></Link>
                </div>

                <div className="reviewEdit">
                    <input type="text" placeholder="Enter name here...."/>
                    <textarea name="" ></textarea>
                    <button>Submit</button>
                </div>
                
            </div>
        );
    }
}

export default ReviewPostPage;