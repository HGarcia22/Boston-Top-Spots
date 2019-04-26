import React from 'react'

const ReviewTile = (props) => {
  let deleteButton
  let buttonId = `deleteButton${props.id}`
  if (props.currentUser !== null && props.currentUser.role === "admin") {
     deleteButton = <button id={buttonId} onClick={props.handleDeleteReview}>Delete Attraction</button>
  }
  return (
    <div className="">
      <li>
        <h3>Rating: {props.rating}</h3>
        <p>{props.body}</p>
      </li>
      {deleteButton}
    </div>
  )
}

export default ReviewTile
