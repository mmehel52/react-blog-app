import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/dashboard/Dashboard";
import Details from "../pages/details/Details";
import UpdateBlog from "../pages/updateblog/UpdateBlog";
import Login from "../pages/login/Login";
import NewBlog from "../pages/newblog/NewBlog";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/newblog" element={<NewBlog />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/update" element={<UpdateBlog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
