import React from "react";
import axios from "axios";

import config from "../../../config/config.json";

const apiUrl: string = config.API_URL;

export const ItemList = () => {
  return (
    <>
      <h1>ItemList</h1>
      <p>this is item list</p>
    </>
  );
};
