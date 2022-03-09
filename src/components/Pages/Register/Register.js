import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const {
    setUser,
    setIsLoading,
    createWithEmailAndPassword,
    updateName,
    signInWithGoogle,
  } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || `/home`;

  // to get Name value
  const nameValue = (e) => {
    setName(e.target.value);
  };
  // to get eamil address
  const emailValue = (e) => {
    setEmail(e.target.value);
  };
  // to get password
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };

  // Login function for eamil and password
  const createAccount = () => {
    createWithEmailAndPassword(email, password)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        updateName(name);
        // save user to database
        saveUser(result.user.email, name, 'POST');
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // login with Google account
  const google = () => {
    signInWithGoogle()
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, 'PUT');
        history.push(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Save user to the database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://fathomless-springs-87004.herokuapp.com/user', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    // Login Form design
    <div className="mx-auto d-flex justify-content-center content-center">
      <div className="shadow p-5 mt-4 rounded text-center">
        <div className="py-2 text-center">
          <h2 className="text-info mb-3">Create Account</h2>
          <input
            onBlur={nameValue}
            type="text"
            placeholder="Name"
            className="form-control"
          />
          <input
            onBlur={emailValue}
            className="form-control my-3"
            type="email"
            name=""
            placeholder="Email"
          />
          <input
            onBlur={passwordValue}
            className="form-control my-3"
            type="password"
            name=""
            placeholder="******"
          />
          <button
            onClick={createAccount}
            className="btn btn-success text-light"
          >
            Create
          </button>
        </div>
        <hr />
        <div className="text-center  my-2">
          <button onClick={google} className="btn btn-info">
            Google
          </button>
        </div>
        <NavLink to="./login">Already have an account??</NavLink>
      </div>
    </div>
  );
};

export default Register;
