import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { signup, error, isLoading } = useSignup();

  //   console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(data);
    } catch (error) {
      console.log(error);
    }
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

      <br />
      <br />
      {isLoading && <p>isLoading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
