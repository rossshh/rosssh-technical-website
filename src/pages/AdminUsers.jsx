import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from 'react-router-dom';

function AdminUsers() {
  const [usersData, setUsersData] = useState([]);
  const { authenticationToken,API} = useAuth();

  const getAllUsers = async (req, res) => {
    try {
      const response = await fetch(`https://rosssh-technical-10y1.onrender.com/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authenticationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsersData(data.users);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error in User");
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://rosssh-technical-10y1.onrender.com/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authenticationToken,
          },
        }
      );
      if(response.ok)
      {
        getAllUsers();
      }
    } catch (error) {
      console.error("Error in Delete User");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section>
      <div>
        <h2>Users Data</h2>
      </div>
      <table className="admin-table">
        <thead>
          <tr className="table-header-row">
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index} className="table-row">
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminUsers;
