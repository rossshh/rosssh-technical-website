import React from "react";
import "./AdminLayout.css";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { LuMessagesSquare } from "react-icons/lu";
import { LiaSitemapSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { useAuth } from "../../store/auth";

function AdminLayout() {

  const {user,isLoading}=useAuth();
  if(isLoading)
  {
    return <h1>Loading...</h1>;
  }

  if(!user.isAdmin){
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="admin-layout">
        <div className="admin-sidebar">
          <ul>
            <li>
              <NavLink to="/admin/users">
                <AiOutlineUserSwitch /> Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts">
                <LuMessagesSquare /> Messages
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/services">
                <LiaSitemapSolid /> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <IoHomeOutline /> Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="users-data">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
