import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { name, img, description, price, _id } = product;

  return (
    <div className="col">
      <div className="card shadow ">
        <img src={img} className="card-img-top" alt="..." height="250px" />
        <div className="card-body bg-light">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text">{description}</p>
          <h5 className=" fw-bold fs-2">${price}</h5>
          <NavLink to={`/order/${_id}`}>
            <button className="btn  btn-dark text-light">Buy Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
