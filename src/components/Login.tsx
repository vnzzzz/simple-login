import React, { SyntheticEvent, useState } from "react";

import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resultcode, setResultcode] = useState(0);
  const [token, setToken] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    interface RequestBody {
      username: string;
      password: string;
    }

    const requestData: RequestBody = {
      username: username,
      password: password,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    };

    const auth_url: string = "http://localhost/flowl-api/token";
    axios
      .post(auth_url, requestData, { headers })
      .then((res) => {
        setResultcode(res.status);
        if (res.status === 200) {
          setToken(res.data.access_token);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={submit}>
        <ul>
          <li>
            <label>username</label>
            <input
              type="username"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit">Sign in</button>
      </form>

      <h2>Response</h2>

      <ul>
        <li>{resultcode !== 0 && <>Code:{resultcode}</>}</li>
        <li>{resultcode !== 0 && <p>token : {token}</p>}</li>
      </ul>
    </>
  );
};

export default Login;
