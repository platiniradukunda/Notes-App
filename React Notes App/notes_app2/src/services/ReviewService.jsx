import axios from 'axios';

const review_url = "http://localhost:8080/review";

class ReviewService {

    // method to post review to DB
    postReview(itemsInState) {
        return axios.post(review_url, itemsInState)
    }

}

export default new ReviewService();