import React, { Component } from 'react';
import ReviewService from '../services/ReviewService'

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
                <input type="text" placeholder="Enter name here...."/>
                <textarea name="" ></textarea>
                <button>Submit</button>
            </div>
        );
    }
}

export default ReviewPostPage;