import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [product, setProduct] = useState({});
  const [cartDetails, setCartDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { code } = useParams();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const p_Id = code; // Replace with actual product ID
  const [originalPrice, setOriginalPrice] = useState(0); // Store the original price
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details by ID
    fetch(`http://localhost:8080/api/productsById/${p_Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setOriginalPrice(data.p_Price);
      })
      .catch((err) => console.log(err));

    fetch(`http://localhost:8080/api/productDetailsById/${p_Id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data.p_Description);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [p_Id]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setDiscountedPrice((prevPrice) => prevPrice - originalPrice);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
    setDiscountedPrice((prevPrice) => prevPrice + originalPrice);
  };

  const handleBuyNow = () => {
    navigate('/payment');
  };

  const handleAddToCart = () => {
    if(sessionStorage.getItem('email')){
      setIsAddedToCart(true);
    const pid = product.p_Id;
    const price = discountedPrice;
    const cartid = cartDetails.cart_Id;

    const data = {
      quantity: quantity,
      prime_CustomerPrice: price,
      p_Id: pid,
      cart_Item_Id: cartid,
    };

    if (productDetails) {
      
      // Send a POST request to the API endpoint
      fetch('http://localhost:8080/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {

          if (response.ok) {
            alert('Item added to cart!');
          }
          else {
            // alert('Failed to add item to cart.');
            
          }
        
        }).catch((error) => {
          // alert('Failed to add item to cart: ' + error.message);
        });
    }
  }
  else{
    alert("plaese login")
  }
  };



  return (
    <div>
       (
        <div className="flex justify-center h-200 w-10/12 ml-20 mt-24">
          <div className="border border-gray-300 rounded-md p-8 mb-20">
            <div className="flex">
              <div className="w-15cm">
                <Card className="w-30 border-none ml-10">
                  <Card.Img variant="top" src={product.p_Image} />
                </Card>
              </div>
              <div className="w-1/2 ml-5">
                <Card.Body className="ml-16">
                  <Card.Title className="text-xl font-bold">
                    <h3>{product.p_Name}</h3>
                  </Card.Title>
                  <Card.Text>
                    <b>Price:</b> &#8377;{product.p_Price}
                    <br />
                    <b>Discount:</b> 10%
                    <br />
                    <b>Discounted Price:</b> &#8377;{(discountedPrice - discountedPrice * 0.1).toFixed(2)}
                    <br />
                    <Card.Text>
                      <b>Product Description:</b> {JSON.stringify(productDetails)}
                    </Card.Text>
                    <b>Quantity:</b>
                    <button className="border bg-red-500 border-2 py-1 px-2 text-sm" onClick={handleQuantityDecrease}>
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button className="border bg-green-500 border-2 py-1 px-2 text-sm" onClick={handleQuantityIncrease}>
                      +
                    </button>
                  </Card.Text>
                </Card.Body>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddToCart}
                  >
                    {isCheckboxChecked ? 'Add to Cart - with Discounted Price' : 'Add to Cart'}
                  </button>

                  {/* {isAddedToCart && (
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2">
                      Added to Cart
                    </button>
                  )} */}
                  <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleBuyNow}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    </div>
  );

}
export default ProductDetails;
