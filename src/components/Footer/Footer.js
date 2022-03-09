import React from 'react';

const Footer = () => {
  return (
    <div className="bg-light mt-4">
      <div className="container pt-3">
        <div className="row text-dark">
          <div className="col-lg-4">
            <h5 className="fw-bold">Outdoor Gear</h5>

            <div>
              <p>
                Whether you are looking for the latest and greatest or a
                selection of discount outdoor gear, we’ve put together a
                comprehensive list of the best outdoor gear websites in
                existence.
              </p>
            </div>
          </div>
          <div className="col-lg-4 lh-1 text-center ">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="flex ">
              <p>Your Account</p>
              <p>Become an Affilliate</p>
              <p>Shipping Rates</p>
              <p>Help</p>
            </div>
          </div>
          <div className="col-lg-4 text-center lh-1 ">
            <h5 className="fw-bold">Support</h5>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <p className="text-center fw-bold">
            {' '}
            &copy; 2021 Outdoor Gear. All rights reserved
          </p>
        </div>
      </div>

      {/* <div className="">
        <p className="">&copy; 2021 Tour Guide. All right reserve.</p>
      </div> */}
    </div>
  );
};

export default Footer;
