import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDumbbell, FaSignOutAlt, FaHome, FaEdit, FaTrash } from "react-icons/fa";
import "./Read.css";
import { toast , ToastContainer } from "react-toastify";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://6862462196f0cc4e34b90470.mockapi.io/GymBro")
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://6862462196f0cc4e34b90470.mockapi.io/GymBro/${id}`)
      .then(() => {
        getData();
      })
      .catch(error => {
        console.error("Error deleting member:", error);
      });
  };

  const setDataToStorage = (id, name, email, phone, membership, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("membership", membership || "Basic");
    localStorage.setItem("age", age);
    console.log("Data saved to localStorage:", { id, name, email, phone, membership, age });
  };

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>⏳ Loading data...</h2>;
  }

  const dashboard = () => {
    if(window.confirm("Are you logged in? If not, click on Add New Member")) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="gymbro-admin-container">
      <div className="admin-header">
        <div className="header-left">
          <FaDumbbell className="gym-icon" />
          <h2>GYMBRO ADMIN PANEL</h2>
        </div>
        <div className="header-right">
          <button 
            className="dashboard-btn"
            onClick={() => dashboard(true)}
          >
            <FaHome /> Dashboard
          </button>
          
            <button className="logout-btn"
            onClick={() => {
              toast.success("Logged Out Successufully");

              setTimeout(() => {
                 navigate('/')
              } , 1000)
            }}
            >
              <FaSignOutAlt /> Logout
            </button>
          
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Member Management</h3>
          <Link to="/form">
            <button className="add-member-btn">
              <FaDumbbell /> Add New Member
            </button>
          </Link>
        </div>

        <div className="table-responsive">
          <table className="gymbro-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Membership</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_email}</td>
                  <td>{item.e_phone}</td>
                  <td>
                    <span className={`membership-badge ${(item.e_membership || 'basic').toLowerCase()}`}>
                      {item.e_membership || 'Basic'}
                    </span>
                  </td>
                  <td>{item.e_age}</td>
                  <td className="action-buttons">
                    
                    <button 
                      className="delete-btn"
                      onClick={() => { 
                        if(window.confirm("Are you sure you want to delete this member?")) {
                          handleDelete(item.id);
                        }
                      }}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  );
}