import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice.js";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          console.log("LOGOUT ELSE");
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h1>Loading components</h1>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-500">
      <div className=" block w-full">
        <Header />

        <main>{/* <Outlet /> */}</main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
