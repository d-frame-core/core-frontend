import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import { store } from "./store";
import { Routes, Route } from "react-router-dom";
import { Page1, Page2 } from "./containers";
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Page1 />} />
        <Route path="/page_2" element={<Page2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data" element={<Home />} />
        <Route path="/wallet" element={<Home />} />
        <Route path="/rewards" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
