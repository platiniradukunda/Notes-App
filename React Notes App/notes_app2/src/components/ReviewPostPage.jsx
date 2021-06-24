import React, { Component } from 'react';

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
            <div>
                <input type="text" placeholder="Enter name here...."/>
                <textarea name="" ></textarea>
            </div>
        );
    }
}

export default ReviewPostPage;