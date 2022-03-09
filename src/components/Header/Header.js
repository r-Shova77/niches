import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './header.css';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  const { user, logOut, admin } = useAuth();
  console.log(admin);
  return (
    <div className=" bg-dark py-3 header">
      <nav className="container d-lg-flex justify-content-between align-items-center">
        <NavLink to="/" className=" text-decoration-none">
          <h2 className="text-light ">Outdoor Gear</h2>
        </NavLink>
        <div className="d-lg-flex">
          <div className="mb-3">
            <div className="mx-4 d-flex">
              <NavLink
                to="/home"
                className="text-decoration-none mx-2 text-light"
              >
                Home
              </NavLink>
              <NavLink
                to="/explore"
                className="text-decoration-none mx-2 text-light"
              >
                Explore
              </NavLink>
              {admin ? (
                <NavLink
                  to="/admin"
                  className="text-decoration-none mx-2 text-light"
                >
                  Admin
                </NavLink>
              ) : (
                ''
              )}
              <div className="ml-3">
                {user.email ? (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light text-dark"
                      id="dropdown-basic"
                    >
                      Dashboard
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <NavLink
                          to="/myOrder"
                          className="text-decoration-none mx-2 text-dark"
                        >
                          My Order
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/payment"
                          className="text-decoration-none mx-2 text-dark"
                        >
                          Payment
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <NavLink
                          to="/review"
                          className="text-decoration-none mx-2 text-dark"
                        >
                          Review
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex mx-2">
              <div className="mx-2">
                {user.email && (
                  <small className="text-light">{user.displayName}</small>
                )}
              </div>
              <div>
                {user.email && (
                  <img
                    className="rounded-circle"
                    src={user.photoURL}
                    alt="profile"
                    width="30px"
                    height="30px"
                  />
                )}
              </div>
            </div>
            <div>
              {user.email ? (
                <button onClick={logOut} className="btn btn-light text-dark">
                  {' '}
                  Log out
                </button>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-dark text-light">Login</button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
