import React from 'react';
// import { Counter } from './features/counter/Counter';
// import ProductList from './features/product-list/ProductList';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import './App.css';
import SignupPage from './pages/SignupPage';

// import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Signup></Signup> */}
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
