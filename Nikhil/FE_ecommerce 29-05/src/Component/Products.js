import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [productdetails, setProductDetails] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    // Fetch products data from the backend API
    fetch("http://localhost:8080/api/productsByCat/" + code)
    // fetch("http://server2-route-hitendra7-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/api/productsByCat/" + code)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));

      fetch(`http://localhost:8080/api/productDetailsById/${code}`)
      .then(res => res.json())
      .then(data => setProductDetails(data.product_Detail_Id))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <br></br>
<Container className="Homecard-cont">
  <h1 style={{ color: 'blue', textAlign: 'center' }}><i>Shop here..</i></h1>
  
  <div className="d-flex flex-nowrap overflow-auto">
    {products.map((product) => (
  <Link to={'/productdetails/' + product.p_Id} key={product.p_Id} style={{ textAlign: 'center', textDecoration: 'none' }}>
    <Card className='Card' style={{ width: '300px', height: '300px', flex: '0 0 auto', marginRight: '10px', border: 'none'}}>
    <Container>
    <div className='card-img' style={{ height: '150px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Card.Img variant="bottom" src={product.p_Image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
    <h5 style={{ color: 'black' }}><b>{product.p_Name}</b></h5>
    <h5>&#8377; {product.p_Price}</h5></Container>
    </Card>
    </Link>
    ))}
  </div>
</Container>
    </div>
  );
}

export default Products;



// import React, { useEffect, useState } from 'react';
// import { Card, Container } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// function Products() {
//   const [products, setProducts] = useState([]);
//   const { code } = useParams();

//   useEffect(() => {
//     // Fetch products data from the backend API
//     fetch("http://localhost:8080/api/productsByCat/" + code)
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error(error));

//   }, []);



//   return (
//     <Container className="Homecard-cont" >
//     <div>
//       <h1> Products Page</h1>

//       <div className="container-fluid mb-5">
//         <div className="row-4">
//           <div className="col-12 m-5 mx-auto">
//             <div className="row gt-4 Shocard">
//               {products.map(product => (
//                 <Card className='Card' style={{ width: '18rem' }}>
//                   <div className='card-img'><Card.Img variant="top" src="../images/face01.png" /></div>
//                   <Card.Body>
//                     <Card.Title className='Carttitle'>{product.p_Name}
//                     </Card.Title>
//                     <Card.Text>
//                       <p>{product.p_Name}</p>
//                       <p>Price: ₹ {product.p_Price}</p>
//                     </Card.Text>

//                     {/* <Button variant="primary" href={'/productdetails/' + product.p_Id}>view details</Button> */}
//                   </Card.Body>
//                 </Card>

//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Container>

//   );
// };

// export default Products;

