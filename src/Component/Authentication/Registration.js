import React, { useState } from 'react';
import './Registration.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // try {
  //   const response =  fetch('http://localhost:8081/api/customer', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //           firstName,
  //           lastName,
  //           email,
  //           password,
  //           mobile,
  //           address
  //       }),
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //       }
  //   });

    // Handle successful registration
  //   if (response.ok) {
  //       alert('Registration successful!');
  //       setFirstName('');
  //       setLastName('');
  //       setEmail('');
  //       setPassword('');
  //       setAddress('');
  //       setMobile('');
  //       setErrorMessage('');
  //   }
  //   // Handle errors
  //   else {
  //       const errorData = response.json();
  //       setErrorMessage(errorData.message);
  //   }
  // } catch (error) {
  //   setErrorMessage('An error occurred while registering. Please try again later.');
  //   console.error(error);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here
    console.log('Registration form submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Mobile:', mobile);
    console.log('Address:', address);
  };

  return (
    <div className="registration-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName"><h5>First Name</h5></label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"><h5>Last Name</h5></label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"><h5>Email</h5></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><h5>Password</h5></label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile"><h5>Mobile Number</h5></label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address"><h5>Address</h5></label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create your OneStop account" />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
