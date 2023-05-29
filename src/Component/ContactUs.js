import React from 'react';
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-shadow">
                <img src="../images/contactus3.png" className="img-fluid" alt="contact" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2" style={{ textAlign: 'center' }}>Quick Contact</h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          style={{ width: '100%' }} // Increase width of text boxes
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email address"
                          style={{ width: '100%' }} // Increase width of text boxes
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone"
                          style={{ width: '100%' }} // Increase width of text boxes
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Message"
                          style={{ width: '100%' }} // Increase width of text boxes
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Button className="Button mt-3 px-3 py-2">SUBMIT</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <br/> <br/> <br/>
            <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* <div className="card-shadow">
                <img src="../images/contactus3.png" className="img-fluid" alt="contact" />
              </div> */}
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="card-body d-flex align-items-center c-detail pl-0">
                    <div className="mx-4 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="address" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Address</h6>
                      <p className="">One Stop Shopping
                        <br />infobell IT, Manyata Techpark, Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-4 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="phone" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Phone</h6>
                      <p className="">+91 7387642978
                        <br /> +111-222-333</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mx-3 align-self-center">
                      <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="email" />
                    </div>
                    <div className="">
                      <h6 className="font-weight-medium">Email</h6>
                      <p className="">onestopshopping@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
