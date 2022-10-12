import React, { useState } from "react";
import axios from "axios";
import "./register.css";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = state;
  const [errorMessage, setErrorMessage] = useState();
  const [sucess, setSucess] = useState();
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });
      setSucess("Registration  is Successful");
    } catch (error) {
      setErrorMessage(error?.response?.data?.message);
    }
  };
  const onChange = (event) => {
    event.preventDefault();

    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form action="/" onSubmit={onSubmit}>
      <div>{sucess}</div>
      <div>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Name"
            name="name"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="emailt"
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
        <div className="error">{errorMessage}</div>

        <div>
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}

export default Register;
