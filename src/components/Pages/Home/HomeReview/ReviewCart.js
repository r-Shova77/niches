import React from 'react';
import Rating from 'react-rating';

const ReviewCart = ({ review }) => {
  return (
    <div className="col-lg-4 col-12 p-2 text-center d-flex flex-sm-cols justify-content-center align-items-center">
      <div
        className="card p-2  d-flex justify-content-center align-items-center shadow"
        style={{ width: '15rem' }}
      >
        <img src={review.data.img} className="rounded-circle w-25" alt="..." />
        <div className="card-body">
          <h4>{review.data.name}</h4>
          <p className="card-text">{review.data.messege}</p>
          <Rating
            initialRating={review.data.rating}
            readonly
            emptySymbol="far fa-star text-dark"
            fullSymbol="fas fa-star text-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
