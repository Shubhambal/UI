import React from 'react';
import { useNavigate } from 'react-router-dom';
import './topoffers.css';

function TopOffers(props) {
  const navigate = useNavigate();

  const handleClick = (pageUrl) => {
    // Navigate to the specified pageUrl when clicked
    navigate(pageUrl);
  };

  const topOffersData = [
    {
      id: 4,
      imageUrl: '../images/beautyoffer.jpg',
      title: '',
      pageUrl: '/products',
    },
    {
      id: 2,
      imageUrl: '../images/electronicsoffers.jpg',
      title: '',
      pageUrl: '/offer2',
    },
    {
      id: 3,
      imageUrl: '../images/fashionoffer.jpg',
      title: '',
      pageUrl: '/offer3',
    },
    {
      id: 1,
      imageUrl: '../images/homeappliances.jpg',
      title: '',
      pageUrl: '/productsByCat/1',
    },
    {
      id: 5,
      imageUrl: '../images/supermarketoffer.jpg',
      title: '',
      pageUrl: '/offer3',
    },
    {
      id: 6,
      imageUrl: '../images/fruitsoffer.jpg',
      title: '',
      pageUrl: '/offer3',
    },
  ];

  return (
    <div>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>
        <i>
          <b>Top Offers</b>
        </i>
      </h1>

      <div className="card-container">
        {topOffersData.map((offer) => (
          <div className="card" key={offer.id}>
            <img
              src={offer.imageUrl}
              alt={offer.title}
              onClick={() => handleClick(offer.pageUrl)}
            />
            <h3>{offer.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopOffers;


// import React from 'react';
// import './topoffers.css';
// import { useNavigate } from 'react-router-dom';

// function TopOffers(props) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to a different page when clicked
//     navigate('/productsByCat/' + props.id);
//   };


//   const topOffersData = [
//     {
//       id: 4,
//       imageUrl: '../images/beautyoffer.jpg',
//       title: '',
//       pageUrl: '/products',
//     },
//     {
//       id: 2,
//       imageUrl: '../images/electronicsoffers.jpg',
//       title: '',
//       pageUrl: '/offer2',
//     },
    
//     {
//       id: 3,
//       imageUrl: '../images/fashionoffer.jpg',
//       title: '',
//       pageUrl: '/offer3',
//     },
//     {
//       id: 1,
//       imageUrl: '../images/homeappliances.jpg',
//       title: '',
//       pageUrl: '/productsByCat/:1',
//     },
//     {
//       id: 5,
//       imageUrl: '../images/supermarketoffer.jpg',
//       title: '',
//       pageUrl: '/offer3',
//     },
//     {
//       id: 6,
//       imageUrl: '../images/fruitsoffer.jpg',
//       title: '',
//       pageUrl: '/offer3',
//     },
//   ];

//   return (
//     <div>
//       <h1 style={{ color: 'blue', textAlign: 'center' }}><i><b>Top Offers</b></i></h1>
      
//       <div className="card-container">
//         {topOffersData.map((offer) => (
//           <div className="card" key={offer.id}>
//             <img src={offer.imageUrl} alt={offer.title} onClick={handleClick} />
//             <h3>{offer.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopOffers;





// import React, { useEffect, useState } from 'react';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';

// function Topoffers()
//  {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products data from the backend API
//     fetch("http://localhost:8081/api/topoffers")
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error(error));

//   }, []);

//   return (
//     <div style={{
//       // backgroundImage: "url('https://thumbs.dreamstime.com/b/e-commerce-online-shopping-digital-marketing-sales-business-technology-concept-137074336.jpg')",
//       // backgroundSize: "cover",
//       // minHeight: "100vh",
//       }}>
//       <Container style={{ paddingTop: "50px" }} className="Homecard-cont">
//         <Row>
        
//         <div className="Cardhead">
//           <h1 ><span>Top Offers</span></h1>
//         </div>
//           {products.map(product => (
//             <Col sm={4} key={product.p_Id}>
//               <Card style={{ margin: "25px", backgroundColor: "#f8f9fa" }}>
//                 <Card.Img variant="top" src={product.p_Image} />
//                 <Card.Body>
//                   <Card.Title>{product.p_Name}</Card.Title>
//                   <Card.Text>
//                     <h2>{product.p_Name}</h2>
//                     <p>Price: ₹{product.p_Price}</p>
//                   </Card.Text>
//                   <Button variant="primary" href={'/productdetails/' + product.p_Id}>View details</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Topoffers;

