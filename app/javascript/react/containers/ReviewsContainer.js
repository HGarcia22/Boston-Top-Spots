import React, { Component } from "react";
import ReviewTile from "../components/ReviewTile";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let reviews = this.props.reviews.map(review => {
      let handleClick = () => {
        this.props.handleDeleteReview(review.id);
      };
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          body={review.body}
          rating={review.rating}
          username={review.reviewer.username}
          score={review.score}
          handleDeleteReview={handleClick}
          currentUser={this.props.currentUser}
          handleVote={this.props.handleVote}
        />
      );
    });
    return (
      <div>
        <ul>{reviews}</ul>
      </div>
    );
  }
}

export default ReviewsContainer;
