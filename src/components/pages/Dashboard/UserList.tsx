import React from "react";
import axios from "axios";

import config from "../../../config/config.json";

interface State {
  users:
    | {
        isLoading: false;
        users: User[];
      }
    | {
        isLoading: true;
      };
}

interface User {
  email: string;
  id: number;
  is_active: boolean;
  items: number[];
}

class App extends React.Component<{}, State> {
  state: State = {
    users: {
      isLoading: true,
    },
  };

  componentDidMount = () => {
    //APIからデータ取得
    const apiUrl: string = config.API_URL + "users";
    axios
      .get(apiUrl)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          users: {
            isLoading: false,
            users: data,
          },
        });
      });
  };

  render = () => {
    // API Loading中の表示
    if (this.state.users.isLoading) {
      return <p>...Loading</p>;
    }
    // API Loading後の表示
    const users = this.state.users.users;
    return (
      <div>
        {Object(users).map((user: User) => (
          <li key={user.id}>
            {" "}
            {user.id} - {user.email}
          </li>
        ))}
      </div>
    );
  };
}

export const UserList = () => {
  return (
    <>
      <h1>UserList</h1>
      <p>this is user list</p>
      <App />
    </>
  );
};
