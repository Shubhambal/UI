import { Container, Row, Col, Image } from 'react-bootstrap';


export default function About() {
    return (
        <div><br/><br/>
            <Container className="my-container-class">
                <Row> 
                <h1 ali>About Our Store</h1>
                        <p>
                            We are a team of passionate individuals who love technology and
                            want to share our knowledge with the world. Our mission is to
                            provide our customers with the latest and greatest tech products
                            at affordable prices.
                        </p><br/>
                        <p>
                            Whether you're a gamer, a professional, or just someone looking
                            for the best deals on tech products, we've got you covered. We
                            believe that everyone should have access to the latest technology,
                            and we're committed to making that a reality.
                        </p>

                    <Col xs={12} md={6} className="my-col-class">
                        <Image src="images/bg9.jpg" fluid />
                    </Col>
                    
                    <Col xs={12} md={6} className="my-col-class">
                        
                    </Col>
                </Row>
            </Container>
            <Container className="my-container-class">
                <Row>
                    <Col xs={12} md={6} className="my-col-class">
                        <Image src="images/offer3.jpg" fluid />
                    </Col>
               </Row>
            </Container>
            {/* <Container className="my-container-class">
                <Row>
                    <Col xs={12} md={6} className="my-col-class">
                        <Image src="images/offer6.jpg" fluid />
                    </Col>
                    <Col xs={12} md={6} className="my-col-class">
                        <h2>About Our Store</h2>
                        <p>
                            We are a team of passionate individuals who love technology and
                            want to share our knowledge with the world. Our mission is to
                            provide our customers with the latest and greatest tech products
                            at affordable prices.
                        </p>
                        <p>
                            Whether you're a gamer, a professional, or just someone looking
                            for the best deals on tech products, we've got you covered. We
                            believe that everyone should have access to the latest technology,
                            and we're committed to making that a reality.
                        </p>
                    </Col>
                </Row>
            </Container> */}
        </div>
    )
}