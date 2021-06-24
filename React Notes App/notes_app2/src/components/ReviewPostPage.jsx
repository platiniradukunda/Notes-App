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
    // changing state with what is being written in the input and the textarea so that it can be sent to database
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }
    // function to post the review to the database
    addReview = () => {
        ReviewService.postReview(this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
    }

    render() {
        return (
            <div className="review">
                <div className="back">
                    {/* link to get back to the notes page to add/edit notes */}
                    <Link to="/"><button>Notes</button></Link>
                    <div className="reviewEdit">
                    <input type="text" placeholder="Enter name here..." onChange={(e)=>this.handleChange(e)} id="name"/>
                    <textarea name="" onChange={(e)=>this.handleChange(e)} id="review" placeholder="Enter review here..."></textarea>
                    {/* calling the function that adds to database when clicked and also links to a different component that shows thanks for review message */}
                    <Link to="/thanks"><button onClick={this.addReview}>Submit</button></Link>
                </div>
                </div>
                    {/* input and textarea to enter name and review */}
                
                
            </div>
        );
    }
}

export default ReviewPostPage;