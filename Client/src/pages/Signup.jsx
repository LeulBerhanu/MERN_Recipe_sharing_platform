import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Signup page</p>

      <hr />

      <label>
        Username:
        <input
          type="text"
          required
          className="border"
          defaultValue={data?.username}
          onChange={(e) =>
            setData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
      </label>

      <br />
      <br />

      <label>
        Email:
        <input
          type="email"
          required
          className="border"
          defaultValue={data?.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </label>

      <br />
      <br />

      <label>
        Password:
        <input
          type="password"
          required
          className="border"
          defaultValue={data?.password}
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </label>

      <br />
      <br />

      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
