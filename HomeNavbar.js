import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconName } from '@heroicons/react/outline';
import "./homeNavbar.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {  useNavigate } from "react-router-dom";

export default function Example() {
  const [email, setemail]=useState();
  const [password, setPassword]=useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate=useNavigate();
  const handleLogin = async () => {
    const response = await fetch('https://localhost:8081/api/Logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.ok) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      setLoggedIn(true);
    //   file();
    } else {
      // handle error
    }
    
  }

  if(sessionStorage.getItem("email")){

  }
  const handleClickLogo = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate("/Login")
  }
  const handlecart = () => {
    navigate("/cart")
  }
const handleRegisterClick = () => {
 navigate("/Register")
}
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center" >
                  <img
                    className="hidden h-8 w-auto lg:block mx-5"
                    src="../images/Onestop.jpg"
                    alt="Your Company"
                    onClick={handleClickLogo}
                  />
                 
                </div>
                <div className="hidden sm:ml-56 sm:block">
                  <div className="flex space-x-22">
                    {/* Search Bar */}
                    <input
                      type="text"
                      placeholder="Search"
                      className="rounded-md px-3 py-2 text-sm w-96"
                    />

                    {/* Search Symbol */}
                    {/* <i className="fas fa-search fa-2x text-red-500"></i> */}

                    <button class="bg-white rounded-full p-2 scroll mr-40">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 15l6 6-6-6z"></path>
                        <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
                      </svg>
                    </button>
                    <svg class="w-10 h- mr-2 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" onClick={handlecart}>
                      <path d="M1 1h4l2.6 12.3A2 2 0 0 0 9 16h10a2 2 0 0 0 1.9-2.7L19 6H6"></path>
                      <circle cx="8.5" cy="19.5" r="1.5"></circle>
                      <circle cx="18.5" cy="19.5" r="1.5"></circle>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>


                    {/* Login and Registration Form */}
                    <div>
                      <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium mr-3" onClick={handleLoginClick}>
                        Login
                      </button>
                      <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium" onClick={handleRegisterClick}>
                        Register
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* <Corosrol></Corosrol> */}
         
         
        </>
      )}
    </Disclosure>
  )
}
/*
 {isAddedToCart && (
        <Button variant="success" disabled>
          Added to Cart
        </Button>
      )}-
*/
