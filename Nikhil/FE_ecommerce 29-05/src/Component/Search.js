import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Search() {
  const [products, setProducts] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    // Fetch products data from the backend API
    fetch("http://localhost:8080/api/search/" + code)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));

  }, []);



  return (
    <Container className="Homecard-cont" >
    <div>
      <h1> Search Results</h1>

      <div className="container-fluid mb-5">
        <div className="row-4">
          <div className="col-12 m-5 mx-auto">
            <div className="row gt-4 Shocard">
              {products.map(product => (
                <Card className='Card' style={{ width: '18rem' }}>
                  <div className='card-img'><Card.Img variant="top" src=    
                  {product.p_Image} /></div>
                  <Card.Body>
                    <Card.Title className='Carttitle'>{product.p_Name}
                    </Card.Title>
                    <Card.Text>
                      <h2>{product.p_Name}</h2>
                      <p>Price: ₹{product.p_Price}</p>
                    </Card.Text>

                    <Button variant="primary" href={'/productdetails/' + 
                    product.p_Id}>view details</Button>
                  </Card.Body>
                </Card>

              ))}
            </div>
          </div>
        </div>
      </div>          
    </div>
    </Container>

  );
};

export default Search;

