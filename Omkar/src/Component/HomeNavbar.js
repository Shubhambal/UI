import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IconName } from '@heroicons/react/outline';
import "./homeNavbar.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Corosrol from "./CarouselComponent"
import {  useNavigate } from "react-router-dom";

const handleLoginClick = () => {
  document.getElementById("loginForm").style.display = "block";
}
const handleLoginClose = () => {
  document.getElementById("loginForm").style.display = "none";
}
const handleRegisterClick = () => {
  document.getElementById("Register").style.display = "block";
}



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
  const handleClickLogo = () => {
    navigate('/');
  };
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
                    <svg class="w-10 h- mr-2 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
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

<Corosrol></Corosrol>
          <div
            className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
            data-glide-el="controls"
          >


          </div>
          <form className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200" id='loginForm'>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-4 text-center">
                <h3 className="text-xl font-medium text-slate-700">Login</h3>
              </header>
              <div className="flex flex-col space-y-8">
                {/*      <!-- Input field --> */}
                <div className="relative my-6">
                  <input
                    id="id-b03"
                    type="email"
                    name="id-b03"
                    placeholder=" your name"
                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <label
                    htmlFor="id-b03"
                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:bg-transparent"
                  >
                    Your email
                  </label>
                </div>
                {/*      <!-- Input field --> */}
                <div className="relative my-6">
                  <input
                    id="id-b13"
                    type="password"
                    name="id-b13"
                    placeholder="your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  
                 
                  <label
                    htmlFor="id-b13"
                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:bg-transparent"
                  >
                    Your password
                  </label>
                  <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">

                  </small>
                </div>
              </div>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-center p-6 ">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2  bg-emerald-500 mx-2 " onClick={handleLoginClick
              }>
                <span>Login</span>
              </button>
               <button className="inline-flex h-10 w-full items-center justify-center gap-2  bg-emerald-500 px-5 " onClick={handleLoginClose}>
    
                <span>Cancel</span>
              </button>
            </div>
            {/*  <!-- The side section --> */}
            <div className="px-6 pb-6">
              <div className="flex justify-between">
                <a
                  href="/"
                  className="font-medium text-slate-700 transition-all hover:text-emerald-600"
                >
                  Forgot your password?
                </a>
                <a
                  href="/"
                  className="font-medium text-slate-700 transition-all hover:text-emerald-600"
                >
                  Register an account
                </a>
              </div>
            </div>
          </form>
          <form className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200" id="Register">
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4 text-center">
          <h3 className="text-xl font-medium text-slate-700">Register</h3>
        </header>
        <div className="flex flex-col space-y-8">
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="firstName"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:bg-transparent"
            >
              First Name
            </label>
          </div>
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="lastName"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Last Name
            </label>
          </div>
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Address"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="address"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Address
            </label>
          </div>
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="mobileNumber"
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="mobileNumber"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Mobile Number
            </label>
          </div>
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="password"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Password
            </label>
          </div>
          {/*      <!-- Input field --> */}
          <div className="relative my-6">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:bg-transparent"
            >
              Email
            </label>
          </div>
        </div>
      </div>
      {/*  <!-- Action base sized basic button --> */}
      <div className="flex justify-center p-6">
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none mr-2">
          <span>Register</span>
        </button>
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none mr-2">
          <span>Cancel</span>
        </button>
      </div>
      {/*  <!-- The side section --> */}
      <div className="px-2 pb-2">
        <div className="flex justify-between">
          {/* <a
            href="/"
            className="font-medium text-slate-700 transition-all hover:text-emerald-600"
          >
            Forgot your password?
          </a> */}
          <a
           onClick={handleLoginClick}
            className="font-medium text-slate-700 transition-all hover:text-emerald-600"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </form>
        </>
      )}
    </Disclosure>
  )
}
