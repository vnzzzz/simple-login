import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useCookies } from "react-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resultcode, setResultcode] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  const handlerLogin = async (e: SyntheticEvent) => {
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
          const access_token: string = res.data.access_token;
          setCookie("access_token", access_token);
        }
      })
      .catch((e) => console.log(e));
  };

  const handlerLogout = async () => {
    removeCookie("access_token");
  };

  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={handlerLogin}>
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

      <button onClick={handlerLogout}>Sign Out</button>

      <h2>Response</h2>
      <ul>
        <li>{resultcode !== 0 && <>Code:{resultcode}</>}</li>
        <li>{resultcode !== 0 && <p>token : {cookies["access_token"]}</p>}</li>
      </ul>
    </>
  );
};

export default Login;
