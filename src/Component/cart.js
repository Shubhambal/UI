import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [data, setData] = useState([]);
  const email_id = sessionStorage.getItem('email');
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://server3-route-hitendra7-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/getbyemail/${email_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data[0].customer_Id);
        console.log("customer", data);
      })
      .catch((err) => console.log(err));
  }, [email_id]);

  useEffect(() => {
    if (customer) {
      fetch(`https://server3-route-hitendra7-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/get/${customer}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("cart details", result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [customer]);

  const handleBuyNow = () => {
    if (sessionStorage.getItem('email')) {
      
      navigate('/payment');
    }
  };
  const handlelogin = () => {
    if (!sessionStorage.getItem('email')) {
      navigate('/login');
    }
  };
  const handleDelete = (cartId) => {
    fetch(`https://server3-route-hitendra7-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/deleteCart/${cartId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Item deleted from the cart successfully.
        // Perform any necessary actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // Failed to delete item from the cart.
        // Handle error or display error message to the user
      });
      window.location.reload();
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="flex justify-center h-200 w-9/12 ml-20 mt-16 mb-3">
            <div className="border border-gray-300 rounded-md p-8 mb-18">
              <div className="flex">
                <div className="w-15cm">
                  <Card className="w-30 border-none ml-10">
                    <Card.Img variant="top" className='h-64' src={item[1]} />
                  </Card>
                </div>
                <div className="w-1/2 ml-5">
                  <Card.Body className="ml-16">
                    <Card.Title className="text-xl font-bold">
                      <h3>{item[2]}</h3>
                    </Card.Title>
                    <Card.Text>
                      <b>Price:</b> &#8377;{item[3]}
                      <br />
                      <b>Discount:</b> 10%
                      <br />
                      <b>Total Cost:</b> {item[5] * item[3]}<br />
                      <b>Discounted Price:</b> &#8377;{((item[5] * item[3]) - (item[5] * item[3]) * 0.1).toFixed(2)}
                      <br />
                      <Card.Text>
                        <b>Product Description:</b> {item[8]}
                      </Card.Text>
                    </Card.Text>
                    <button
                      className="bg-red-600 hover:bg-red-900-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(item[7])}
                    >
                      Remove
                    </button>
                  </Card.Body>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='justify-center'>
<Card.Img variant="top" className="mx-auto my-4" style={{ maxWidth: "25%", height: "25%" }} src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
<Card.Text className='text-center mb-5'><h4><b>Your cart is empty</b></h4></Card.Text>
<div className="flex justify-center mt-1">     
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 mb-4" onClick={handlelogin}>
            Login
          </button>
        </div>
          
          </div>
          
      )}

      {data.length > 0 && (
        <div className="flex justify-center mt-1">     
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 mb-4" onClick={handleBuyNow}>
            Check out
          </button>
        </div>
      )}
    </div>
  );
}
