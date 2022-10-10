import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
