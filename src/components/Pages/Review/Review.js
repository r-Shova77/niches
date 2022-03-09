import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.img = user.photoURL;
    fetch('https://fathomless-springs-87004.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert('Successfully Reviewed');
          reset();
        }
      });
  };
  return (
    <div className="container pt-5">
      <h2 className="mt-5 text-dark fw-bold text-center">Review Section</h2>
      <div className="mt-4 text-center d-flex justify-content-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control p-4 w-50 shadow"
        >
          <input
            defaultValue={user.displayName}
            {...register('name')}
            placeholder="Name"
            className="form-control my-2"
          />
          <input
            defaultValue={user.email}
            {...register('email')}
            placeholder="Email"
            className="form-control my-2"
          />

          <input
            placeholder="Your Rating in 1 to 5"
            {...register('rating', { min: 1, max: 5 })}
            className="form-control my-2"
          />
          <textarea
            {...register('messege')}
            placeholder="Your Messege"
            className="form-control my-2"
          />
          <input type="submit" className="btn btn-dark" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Review;
