import React, { useState } from "react";

const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [mobile_num, setmobile_num] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email_id, setemail_id] = useState("");
  const [address, setAddress] = useState("");
  const [username, setusername] = useState("");

  const handleFirstNameChange = (event) => {
    setfirst_name(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setlast_name(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setemail_id(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileChange = (event) => {
    setmobile_num(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          username,
          mobile_num,
          address,
          email_id,
          password,
        }),
      });

      if (response.ok) {
        alert("Successfully registered!");
      } else {
        alert("The user already exists");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("The user already exists or enter correct values");
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="first_name" className="text-lg font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your first name"
            value={first_name}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="last_name" className="text-lg font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your last name"
            value={last_name}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="text-lg font-semibold">
            User Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your user name"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email_id" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email_id"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            value={email_id}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="text-lg font-semibold">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your mobile number"
            value={mobile_num}
            onChange={handleMobileChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="text-lg font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="Enter your address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value="Create your OneStop account"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
