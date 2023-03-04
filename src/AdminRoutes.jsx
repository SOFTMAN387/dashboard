import { Routes, Route } from "react-router-dom";
//import Home from "./Components/home/Home";
import AdminIndex from "./Components/admin/AdminIndex";
import Users from "./Components/admin/AdminPages/Users";
import Products from "./Components/admin/AdminPages/Products";
import Orders from "./Components/admin/AdminPages/Orders";

import "./App.css";

function AdminRoutes() {
  return (
    <>

      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}

        <Route exact path="/dashboard" element={<AdminIndex />} />
        <Route exact path="/dashboard/users" element={<Users />} />
        <Route exact path="/dashboard/products" element={<Products />} />
        <Route exact path="/dashboard/orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default AdminRoutes;