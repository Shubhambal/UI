// import { Link } from 'react-router-dom';

// function CardCat({ imgsrc, catname, id }) {
//   return (
//     <div>
//       <Link to={`subcategories/${id}`} style={{ textDecoration: 'none' }}>
//         <div className="Cardcat">
//           <img src={imgsrc} alt={catname} />
//           <h3>{catname}</h3>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default CardCat;



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CardCat(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a different page when clicked
    navigate('/subcategories/' + props.id);
  };

  if (props.flag) {
    return (
      <Card className='Card' style={{ width: '18rem', marginLeft: '45px', borderRadius: '35%',
      overflow: 'hidden', backgroundColor: '#EADDCA'}} onClick={handleClick}>
      <div className='card-img'><Card.Img variant="top" style={{ objectFit: "contain" }} src={props.imgsrc} /></div>
      <br/>
      <h3>{props.catname}</h3>
      </Card>
    );
  } 
  else {
    return (
      <Card style={{ width: '18rem', borderRadius: '35%', overflow: 'hidden' }} onClick={handleClick}>
        <Card.Img variant="top" style={{ objectFit: "contain" }} src={props.imgsrc} />
        <Card.Body>
          <Card.Title className='Carttitle'>{props.catname}</Card.Title>
          <Card.Text>
            {props.catname}
          </Card.Text>
          <option></option>
          <Button className='Button' variant="info">Products</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardCat;
