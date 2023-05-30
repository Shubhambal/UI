import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function HomeNavbar() {
  const [searchTerm, setSearchTerm] = useState('');
 
  return (
    <div>
      <nav
        id='header'
        className='navbar navbar-expand-lg bg-body-tertiary navbar-light bg-primary py-0.25 shadow-sm'
      >
        <div className='container'>
          <Nav.Link
            href={'/'}
            className='navbar-brand fw-bold fs-4'
           
            to='/'
          >  <img src='./images/OneStop.jpg'></img>
           
          </Nav.Link>
          <Button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='/navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </Button>
          <div className='collapse navbar-collapse'  id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto '>
              <li className='nav-item'>
                <Nav.Link
                  className='nav-link active '
                  aria-current='page'
                  href='/'
                  style={{ color: "white" }}
                 >
                  <h3><b>Home</b></h3>
                </Nav.Link>
              </li>  </ul>
              {/* <li className='nav-item'>
                <Nav.Link className='nav-link' href='/about'>
                  About
                </Nav.Link>
              </li> */}
              {/* <li className='nav-item'>
                <Nav.Link className='nav-link' href='/contactus'>
                  Contact us
                </Nav.Link>
              </li>  */}
          
          <div className='d-flex'>
  <input
    className='form-control mx-1'
    type='search'
    placeholder='Search for products, brands and more..'
    aria-label='Search'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{ width: "500px", fontSize: "20px" }}
  />
  <a
    className='btn btn-outline-light'
    href={"/search/" + searchTerm}
  >
  <i class="fa fa-search fa-2x"></i>

  </a>
</div>



            <div className='buttons'>
            <a href='/cart' className='btn btn-outline-light mx-5 '>
  <i className='fa fa-shopping-cart fa-1.5x'> <h5>Cart</h5></i>
</a>

              <a href='/login' className='btn btn-outline-light mx-4'>
                <i className='fa fa-sign-in fa-1.5x'></i> <h5>Login</h5>
              </a>
              <a href='/register' className='btn btn-outline-light mx-2'>
                <i className='fa fa-user-plus fa-1.5x'></i> <h5>Register</h5>
              </a>
              {/* <Link to='/home'>back</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
