import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

function AdminContacts() {
  const [contactData, setContactData] = useState([]);
  const { authenticationToken,API } = useAuth();

  const getAllContacts = async(req,res) => {
    try {
      const response = await fetch(`https://rosssh-technical-10y1.onrender.com/api/admin/contacts`, {
        method: "GET",
        headers:{
          Authorization: authenticationToken,
        },
      });
      if (response.ok){
        const data = await response.json();
        setContactData(data.contacts);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error in Usesr");
    }
  };
  useEffect(() => {
    getAllContacts();
  },[]);

  return (
    <section>
      <div>
        <h2>Contact Data</h2>
      </div>
      <table className="admin-table">
        <thead>
          <tr className="table-header-row">
            <td>Username</td>
            <td>Email</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {contactData.map((curElem, index) => (
            <tr key={index} className="table-row">
              <td>{curElem.username}</td>
              <td>{curElem.email}</td>
              <td>{curElem.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminContacts;
