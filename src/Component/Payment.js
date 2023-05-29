import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Payment() {
  return (
    
  
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="Card">
        <MDBCardBody className="p-4">
              <div className="Card">
                
                <h1>Payment</h1>
              </div>
              <p className="Card">Saved card:</p>
              <div className="Card">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="..."
                />
                 <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="..."
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <label>Card Number</label>
                    <MDBInput
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 1626"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>

             
              
              <p className="fw-bold mb-4">Add new card:</p>
              <label>Cardholder's Name</label>
              <MDBInput
                id="form3"
                type="text"
                size="lg"
                placeholder="************** "
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                <label>CardNumber</label>
                  <MDBInput
                    id="form4"
                    type="text"
                    size="lg"
                    placeholder="**** **** **** ****"
                  />
                </MDBCol>
                <MDBCol size="3">
                <label>Expire</label>
                  <MDBInput
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                <label>CVV</label>
                  <MDBInput
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block>
                Add card
              </MDBBtn>
              &nbsp;
              <MDBBtn color="success" size="lg" block>
                Pay
              </MDBBtn>
              
            </MDBCardBody>
            
          </MDBCard>
          
        </MDBCol>
      </MDBRow>
);
}
