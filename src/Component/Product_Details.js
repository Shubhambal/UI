import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './pd.css';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [product, setProduct] = useState({});
  const [customerDetails, setCustomerDetails] = useState({});
  const [walletDiscount, setWalletDiscount] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(product.p_Price);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartDetails, setCartDetails]=useState({});
  const { code } = useParams();


  const p_Id = code; // Replace with actual product ID
  const pd_Id = code+6;
  const username = "sid@13"; // Replace with actual username
  

  useEffect(() => {
    // Fetch product details by ID
    fetch(`http://localhost:8081/api/productsById/${p_Id}`)
      .then(res => res.json())
      .then(data => {setProduct(data);setDiscountedPrice(data.p_Price)})
      .catch(err => console.log(err));

    fetch(`http://localhost:8081/api/productDetailsById/${pd_Id}`)
      .then(res => res.json())
      .then(data => setProductDetails(data))
      .catch(err => console.log(err));

    // Fetch customer details by username
    fetch(`http://localhost:8081/api/getByUserName/${username}`)
      .then(res => res.json())
      .then(data =>{ setCustomerDetails(data[0]); setCartDetails(data[1])})
      .catch(err => console.log(err));
  }, [p_Id, username]);


  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleWalletDiscountChange = (event) => {
    const value = event.target.value;
    setWalletDiscount(value);
  };

  const applyDiscount = () => {
    if (isCheckboxChecked && customerDetails.prime_Customer && product.p_Prime) {
      const productPrice = parseFloat(product.p_Price);
      const walletBalance = parseFloat(customerDetails.wallet);
      const discountAmount = 0.1 * productPrice;
      const addon = 0.01*product.p_Price;
  
      if (discountAmount <= walletBalance) {
        const newPrice = productPrice - discountAmount;
        setDiscountedPrice(newPrice.toFixed(2));
        
        const updatedWalletBalance = walletBalance - discountAmount + addon;
  
        fetch(`http://localhost:8081/api/customer/${customerDetails.customer_Id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ wallet: updatedWalletBalance }),
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(`Response status ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            setCustomerDetails(data);
          })
          .catch(err => console.log(err));
  
        return newPrice;
      }
    }
  };
  
  const handleAddToCart = () => {
    setIsAddedToCart(true);
    
    const pid=product.p_Id;
    const price=discountedPrice;//product.p_Price;
    const cartid=cartDetails.cart_Id;

    const data = {
      "quantity": 1,
      "prime_CustomerPrice": price,
      "p_Id": pid,
      "cart_Id": cartid
    };
  
    if(productDetails){
    // Send a POST request to the API endpoint
    fetch('http://localhost:8081/api/cartitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        alert('Item added to cart!');
      } else {
        alert('Failed to add item to cart.');
      }
    })
    .catch(error => {
      alert('Failed to add item to cart: ' + error.message);
    });
  }
};

  
  return (
    <div><br/>
      <h1 style={{textAlign:'center'}}>Product Details</h1><br/>

<Card style={{ width: '40rem'}}>
<Card.Img variant="top" src={product.p_Image} />
  <Card.Body>
    <Card.Title><h2><b>{product.p_Name}</b></h2></Card.Title><br/>
    <Card.Text>
    <h4>Price: ₹ {product.p_Price}</h4>
      <br />
      <h4>Discount: - ₹ {product.p_Price - discountedPrice}</h4>
      <br />
      <h4>Discounted Price: ₹ {discountedPrice}</h4>
      <br />
      <h4>Product Discription: </h4>
    </Card.Text>
    <Card.Text>{productDetails.p_Description}</Card.Text>
  </Card.Body>
</Card>
<br />
      {customerDetails.prime_Customer && product.p_Prime && (
  <Form>
    <Form.Group controlId="formCheckbox">
      <Form.Check
        type="checkbox"
        label="Use wallet balance as discount"
        checked={isCheckboxChecked}
        onChange={handleCheckboxChange}
      />
    </Form.Group>

    {isCheckboxChecked && (
      <Form.Group controlId="formWalletDiscount">
        <Form.Label>Wallet Balance = {customerDetails.wallet} </Form.Label><br/>
        {/* <Form.Control
          type="number"
          value={walletDiscount}
          onChange={handleWalletDiscountChange}
        /> */}
        <Button variant="primary" onClick={applyDiscount}>
          Apply 10% Discount
        </Button>
      </Form.Group>
    )}
  </Form>
)}

{!isAddedToCart && (
  <Button variant="primary" onClick={handleAddToCart}>
    {isCheckboxChecked ? "Add to Cart - with Discounted Price" : "Add to Cart"}
  </Button>
)}

{isAddedToCart && (
  <Button variant="success" disabled>
    Added to Cart
  </Button>
)}

      {/* <h1>Customer Details</h1>
      <p>{customerDetails.username}</p>
      <p>{customerDetails.email_Id}</p>
      <p>{customerDetails.wallet}</p>
      <p>{cartDetails.cart_Id}</p>

      <p>{customerDetails.prime_Customer}</p> */}
    </div>
  );
}
export default ProductDetails;


// import React, { useEffect, useState } from 'react';
// import { Button, Card, Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import './pd.css';

// function ProductDetails() {
//   const [productDetails, setProductDetails] = useState({});
//   const [product, setProduct] = useState({});
//   const [customerDetails, setCustomerDetails] = useState({});
//   const [walletDiscount, setWalletDiscount] = useState(0);
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
//   const [discountedPrice, setDiscountedPrice] = useState(product.p_Price);
//   const [isAddedToCart, setIsAddedToCart] = useState(false);
//   const [cartDetails, setCartDetails] = useState({});
//   const { code } = useParams();


//   const p_Id = code; // Replace with actual product ID
//   const username = "sid@13"; // Replace with actual username
//   // const pId = code+6;

//   useEffect(() => {
//     // Fetch product details by ID
//     fetch(`http://localhost:8081/api/productsById/${p_Id}`)
//       .then(res => res.json())
//       .then(data => { setProduct(data); setDiscountedPrice(data.p_Price) })
//       .catch(err => console.log(err));

//     fetch(`http://localhost:8081/api/productDetailsById/${p_Id}`)
//       .then(res => res.json())
//       .then(data => setProductDetails(data.p_Description))
//       .catch(err => console.log(err));

//     // Fetch customer details by username
//     fetch(`http://localhost:8081/api/getByUserName/${username}`)
//       .then(res => res.json())
//       .then(data => { setCustomerDetails(data[0]); setCartDetails(data[1]) })
//       .catch(err => console.log(err));
//   }, [p_Id, username]);


//   const handleCheckboxChange = () => {
//     setIsCheckboxChecked(!isCheckboxChecked);
//   };

//   const handleWalletDiscountChange = (event) => {
//     const value = event.target.value;
//     setWalletDiscount(value);
//   };

//   const applyDiscount = () => {
//     if (isCheckboxChecked && customerDetails.prime_Customer && product.p_Prime) {
//       const productPrice = parseFloat(product.p_Price);
//       const walletBalance = parseFloat(customerDetails.wallet);
//       const discountAmount = 0.1 * productPrice;
//       const addon = 0.01 * product.p_Price;

//       if (discountAmount <= walletBalance) {
//         const newPrice = productPrice - discountAmount;
//         setDiscountedPrice(newPrice.toFixed(2));

//         const updatedWalletBalance = walletBalance - discountAmount + addon;

//         fetch(`http://localhost:8081/api/customer/${customerDetails.customer_Id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ wallet: updatedWalletBalance }),
//         })
//           .then(res => {
//             if (!res.ok) {
//               throw new Error(`Response status ${res.status}`);
//             }
//             return res.json();
//           })
//           .then(data => {
//             setCustomerDetails(data);
//           })
//           .catch(err => console.log(err));

//         return newPrice;
//       }
//     }
//   };



//   const handleAddToCart = () => {
//     setIsAddedToCart(true);

//     const pid = product.p_Id;
//     const price = discountedPrice;//product.p_Price;
//     const cartid = cartDetails.cart_Id;

//     const data = {
//       "quantity": 1,
//       "prime_CustomerPrice": price,
//       "p_Id": pid,
//       "cart_Id": cartid
//     };

//     if (productDetails) {
//       // Send a POST request to the API endpoint
//       fetch('http://localhost:8081/api/cartitems', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => {
//           if (response.ok) {
//             alert('Item added to cart!');
//           } else {
//             alert('Failed to add item to cart.');
//           }
//         })
//         .catch(error => {
//           alert('Failed to add item to cart: ' + error.message);
//         });
//     }
//   };


//   return (
//     <div>
//       <h1>Product Details</h1>

//       <div className='col-sm-3 col-md-6 col-lg-4'>
//         <Card style={{ width: '15rem', border: 'none', marginLeft: '50px' }}>
//           <Card.Img variant="top" src={product.p_Image}/>
//         </Card>
//       </div>

//       <div className='split right'>
//         <Card.Body style={{ marginLeft: '50px' }}>
//           <Card.Title>{product.p_Name}</Card.Title>
//           <Card.Text>
//             Price: ₹{product.p_Price}
//             <br />
//             Discount: -₹{product.p_Price - discountedPrice}
//             <br />
//             Discounted Price: ₹{discountedPrice}
//           </Card.Text>
//           <Card.Text>{productDetails.p_Description}</Card.Text>
//         </Card.Body>
//       </div>


//       {customerDetails.prime_Customer && product.p_Prime && (
//         <Form>
//           <Form.Group controlId="formCheckbox">
//             <Form.Check
//               type="checkbox"
//               label="Use wallet balance as discount"
//               checked={isCheckboxChecked}
//               onChange={handleCheckboxChange}
//             />
//           </Form.Group>

//           {isCheckboxChecked && (
//             <Form.Group controlId="formWalletDiscount">
//               <Form.Label>Wallet Balance = {customerDetails.wallet} </Form.Label><br />
//               {/* <Form.Control
//           type="number"
//           value={walletDiscount}
//           onChange={handleWalletDiscountChange}
//         /> */}
//               <Button variant="primary" onClick={applyDiscount}>
//                 Apply 10% Discount
//               </Button>
//             </Form.Group>
//           )}
//         </Form>
//       )}

//       {!isAddedToCart && (
//         <Button variant="primary" onClick={handleAddToCart}>
//           {isCheckboxChecked ? "Add to Cart - with Discounted Price" : "Add to Cart"}
//         </Button>
//       )}

//       {isAddedToCart && (
//         <Button variant="success" disabled>
//           Added to Cart
//         </Button>
//       )}

//       {/* <h1>Customer Details</h1>
//       <p>{customerDetails.username}</p>
//       <p>{customerDetails.email_Id}</p>
//       <p>{customerDetails.wallet}</p>
//       <p>{cartDetails.cart_Id}</p>

//       <p>{customerDetails.prime_Customer}</p> */}
//     </div>
//   );
// }
// export default ProductDetails;



























