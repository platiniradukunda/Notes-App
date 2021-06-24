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

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    addReview = () => {
        ReviewService.postReview(this.state).then(response=>{console.log(response)}).catch(error=>{console.log(error)});
        window.location.reload(false);
    }

    render() {
        return (
            <div className="review">
                <div className="back">
                    <Link to="/"><button>Notes</button></Link>
                </div>

                <div className="reviewEdit">
                    <input type="text" placeholder="Enter name here..." onChange={(e)=>this.handleChange(e)} id="name"/>
                    <textarea name="" onChange={(e)=>this.handleChange(e)} id="review" placeholder="Enter review here..."></textarea>
                    <button onClick={this.addReview}>Submit</button>
                </div>
                
            </div>
        );
    }
}

export default ReviewPostPage;