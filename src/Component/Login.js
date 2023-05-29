import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './Login.css';


function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  
  useEffect(() => {
    // Check if customer is prime
    fetch('https://localhost:7125/api/customers/' + email)
      .then(response => response.json())
      .then(data => sessionStorage.setItem('customer', data));
  }, []);

  const handleLogin = async () => {
    const response = await fetch('https://localhost:7125/api/Logins', {
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
  };

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    setLoggedIn(false);
  };

  const isLoggedIn = () => {
    return loggedIn || (sessionStorage.getItem('email') && sessionStorage.getItem('password'));
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          {message && <div className="success-message">{message}</div>}
          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Id:
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email Id"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
        <div className="card-footer">
          <h5> New to OneStop? <a href="/register"><br/>Create your OneStop account</a></h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
