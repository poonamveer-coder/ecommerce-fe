import axios from "axios";
import React, { useState } from "react";

export const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const { email, password } = state;
  const onChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      localStorage.setItem("token", result.data.token);
      setSuccess("You Logged in Successfuly");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div>{success}</div>
      <div>
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="Password"
          name="password"
          onChange={onChange}
        />
      </div>

      <div className="error">{error}</div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};
