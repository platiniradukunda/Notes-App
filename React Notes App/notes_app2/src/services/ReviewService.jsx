import axios from 'axios';

const review_url = "http://localhost:8080/review";

class ReviewService {

    // method to post review to DB
    postReview(reviewInState) {
        return axios.post(review_url, reviewInState)
    }

}

export default new ReviewService();