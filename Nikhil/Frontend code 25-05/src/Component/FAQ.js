
import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
  useEffect(() => {
    // Initialize the accordion functionality
    $('.collapse').on('show.bs.collapse', function () {
      $(this).prev('.card-header').addClass('active');
    });

    $('.collapse').on('hide.bs.collapse', function () {
      $(this).prev('.card-header').removeClass('active');
    });
  }, []);

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-1">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                // aria-controls="collapseOne"
              >
                <h5>Question 1: How long does it take to deliver an order?</h5>
              </button>
            </h2>
          </div>

          {/* <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          > */}
            <div className="card-body">
              <h5>Answer 1: The delivery time depends on your location and the availability of the product. Generally, we strive to deliver orders within 2-7 business days.</h5>
            {/* </div> */}
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5>Question 2: What is your return policy?</h5>
              </button>
            </h2>
          </div>
        {/* <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          > */}
            <div className="card-body">
              <h5>Answer 2: We have a flexible return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a refund or exchange. Please refer to our Returns Policy for more details.
              </h5>  {/* </div> */}
          </div></div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h5>Question 3: How can I track my order?</h5>
              </button>
            </h2>
          </div>

          {/* <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          > */}
            <div className="card-body">
              <h5>Answer 3: You can easily track your order by visiting the "My Orders" section in your account. We also provide regular updates through email and SMS regarding the status of your order.
            </h5>{/* </div> */}
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
               <h5>Question 4: What payment options do you accept?</h5> 
              </button>
            </h2>
          </div>

          {/* <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          > */}
            <div className="card-body">
             <h5>Answer 4: We accept various payment options including credit/debit cards, net banking, UPI, and cash on delivery (COD). You can choose the payment method that is most convenient for you during the checkout process.
           </h5>  {/* </div> */}
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
              <h5>Question 5: Can I cancel my order?</h5>  
              </button>
            </h2>
          </div>

          {/* <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordionExample"
          > */}
            <div className="card-body">
             <h5>Answer 5: Yes, you can cancel your order before it has been shipped. Once the order is shipped, it cannot be canceled. You can initiate the cancellation process from the "My Orders" section or by contacting our customer support team.
          </h5>   {/* </div> */}
      </div>
    </div></div>
  );
};

export default FAQ;
