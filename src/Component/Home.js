import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import CardCat from "./CardCat";
import Topoffers from "./Topoffers";



export default function Home() {

  const [Categories, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/Categories")
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, []);


  return (
    <div className="hero">
<br/>
      <Carousel slide={true} className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg11.jpg"
            alt="First slide"

          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg6.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg7.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg12.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg13.jpg"
            alt="Fifth slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/bg14.jpg"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
          </Carousel.Item>
      </Carousel>

      
      <Container className="Homecard-cont" >
        <div className="Cardhead">
          {/* <h1 >Shop by <span>Categories</span></h1> */}
        </div>
        <div className="container-fluid mb-5">
          <div className="row-4">
            <div className="col-12 m-5 mx-auto">

              <div className="row gt-4 Shocard">
                {Categories.map((val, ind) => {
                  return (

                    <CardCat
                      imgsrc={val.category_Img_Path}
                      catname={val.category_Name}
                      id={val.category_Id}
                      subcategory={val.parentcategory_Id}
                      flag={val.flag}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Topoffers/>
      
     
    </div>
     
  );
};