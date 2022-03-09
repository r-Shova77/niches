import React, { useState } from 'react';

const MakeAmin = () => {
  const [email, setEmail] = useState('');

  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch('https://fathomless-springs-87004.herokuapp.com/user/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail('');
        }
      });
  };
  console.log(success);
  return (
    <div className="shadows">
      <div className="text-center">
        <h4 className="text-dark mb-3">Make admin</h4>
        <form onSubmit={handleSubmit} className="p-3 form-control shadow">
          <input
            type="email"
            onBlur={handleOnBlur}
            placeholder="Email"
            className="form-control my-2"
          />
          <input
            type="submit"
            value="Make Admin"
            className="btn btn-dark text-light"
          />
        </form>
        {success ? (
          <div class="alert alert-success" role="alert">
            Successfully Added An Admin!
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MakeAmin;
