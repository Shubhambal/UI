import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './OrderReturnCancellation.css';

const OrderReturnCancellation = () => {
  const [isReturnRequested, setIsReturnRequested] = useState(false);
  const [isCancelRequested, setIsCancelRequested] = useState(false);

  const handleReturnRequest = () => {
    setIsReturnRequested(true);
  };

  const handleCancelRequest = () => {
    setIsCancelRequested(true);
  };

  if (isReturnRequested) {
    return <Navigate to="/login" replace />;
  }

  if (isCancelRequested) {
    return <Navigate to="/login" replace />;
  }

  return (
    
    <div className="order-return-cancellation"><br/>
      <div className="return-request">
        {isReturnRequested ? (
          <>
            <h1>Return Request</h1>
          </>
        ) : (
          <><br/>
            <button className="return-button" onClick={handleReturnRequest}>
              Request Return
            </button>
            <h3>If you are not satisfied with your order, you can request a return.</h3>
            
          </>
        )}
      </div>
<br/><br/>
      <div className="order-cancellation">
        {isCancelRequested ? (
          <>
            <h2>Order Cancellation</h2>
            <p>Your order cancellation request has been submitted successfully.</p>
            <p>We will process your request and refund your payment, if applicable.</p>
          </>
        ) : (
          <>
            <button className="cancel-button" onClick={handleCancelRequest}>
              Cancel Order
            </button>
            <h3>If you wish to cancel your order, you can submit a cancellation request.</h3><br/><br/><br/><br/>
            <h3>We will process your request and provide further instructions...</h3>
          </>
          
        )}
      </div>
    </div>
  );
};

export default OrderReturnCancellation;
