import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useFormik } from 'formik';
import { FromSchema }  from '../Form/FromSchema'
import './form.css';
import 'react-toastify/dist/ReactToastify.css';
import submitFormData from "./Services/Create";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer , toast } from "react-toastify";
import { Link } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate();
    const initialFormValues = {
        name: "",
        email: "",
        pass : "" ,
        phone: "+91 ",
        age: "",
        gender: "",
        membership: "",
        routine: "",
        goal: "",
        terms: false, 
    };
   

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema : FromSchema,
        onSubmit: async (values, action ) => {

            try{

                const result = await submitFormData(values);
                console.log("Sucess" , result);
                toast.success("Form Submitted Sucessfully");
                action.resetForm();  
                setTimeout(() => {
                    navigate("/form/table")
                } , 2000)
            } catch(error){
                console.log("Error =>" , error);
                toast.error("Failed to submit");
            }
        }
    });
 
    const handleChange = (e) => {
        e.preventDefault();
        formik.handleChange(e);
       
    }

    const signup = () => {
        toast.info("Redirecting to sign up") 
       setTimeout(() => {
         navigate('./signup')
       }, 1000)
    }
    const panel = () => {
        toast.success("Heading to the Panel")
        setTimeout(() => {
            navigate("/form/table")
        },1000)
    }
  return (
        <>
            <div className="form-container">

            <div className="form-header">
                  
                <h2 className="form-title">JOIN GYMBRO TODAY</h2>
                 <div className="mb-2 mt-2 ">
                            
                                 <button 
                                 className="btn btn-danger m-4 "
                                 onClick={panel}
                                 >GO TO PANEL</button>
                         
                          </div>
                      
                            <button
                                className="sign-up-button w-2"
                                onClick={signup}>
                                Sign UP
                            </button>
                        
                   </div>
            <form onSubmit={formik.handleSubmit}  className="gymbro-form">
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                        type="text"
                        className="form-input"
                        name="name"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        
                        placeholder="Enter your full name"
                    />
                  {
                    formik.errors.name && formik.touched.name ? (<span style={{color : "red"}}>{formik.errors.name}</span>) : null
                  }
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-input"
                        name="email"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Enter your email"
                    />
                   {
                     formik.errors.email && formik.touched.email ? ( <span style={{color : "red"}}>{formik.errors.email}</span>) : null
                   }
                </div>
               
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input 
                        type="text"
                        className="form-input"
                        name="pass"
                        onChange={handleChange}
                        value={formik.values.pass}
                    />
                    <span style={{color:"red"}}>{formik.errors.pass}</span>

                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                        type="number"
                        className="form-input"
                        name="phone"
                        onChange={handleChange}
                        value={formik.values.phone}
                    />
                    <span style={{color:"red"}}>{formik.errors.phone}</span>

                </div>

                <div className="form-group">
                    <label className="form-label">Age</label>
                    <input 
                        type="number"
                        className="form-input"
                        name="age"
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                        placeholder="Your age"
                        min="16"
                        max="80"
                    />
                    {
                        formik.errors.age && formik.touched.age ? (<span style={{color : "red"}}>{formik.errors.age}</span>) : null
                    }
                </div>

                <div className="form-group radio-group">
                    <label className="form-label">Gender</label>
                    <div className="radio-options">
                        <label className="radio-label">
                            <input 
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === 'male'}
                            />
                            <span className="radio-custom"></span>
                            Male
                        </label>
                        <label className="radio-label">
                            <input 
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === 'female'}
                            />
                            <span className="radio-custom"></span>
                            Female
                        </label>
                        <label className="radio-label">
                            <input 
                                type="radio"
                                name="gender"
                                value="other"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === 'other'}
                            />
                            <span className="radio-custom"></span>
                            Other
                        </label>
                     
                    </div>

                   <span style={{color:"red"}}>{formik.errors.gender}</span>
                </div>

                <div className="form-group">
                    <label className="form-label">Membership Type</label>
                    <select 
                        className="form-select"
                        name="membership"
                        onChange={handleChange}
                        value={formik.values.membership}
                    >
                        <option value="">Select membership</option>
                        <option value="basic">Basic (599rs/month)</option>
                        <option value="premium">Premium (2,099rs/month)</option>
                        <option value="vip">VIP (7499rs/month)</option>
                    </select>
                    <span style={{color : "red"}}>{formik.errors.membership}</span>
                </div>

                <div className="form-group">
                    <label className="form-label">Workout Catagery</label>
                    <select 
                        className="form-select"
                        name="routine"
                        onChange={formik.handleChange}
                        value={formik.values.routine}
                    >
                        <option value="">Select Stage</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="custom">Custom Program</option>
                    </select>
                    <span style={{color : "red"}}>{formik.errors.routine}</span>
                </div>

                <div className="form-group">
                    <label className="form-label">Your Fitness Goals</label>
                    <textarea 
                        className="form-textarea"
                        name="goal"
                        onChange={formik.handleChange}
                        value={formik.values.goal}
                        placeholder="Describe your fitness goals..."
                    ></textarea>
                </div>

                <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                        <input 
                            type="checkbox"
                            className="form-checkbox"
                            name="terms"
                            onChange={formik.handleChange}
                            checked={formik.values.terms}
                        />
                        <span className="checkbox-custom"></span>
                        I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit" className="form-submit">
                    GET STARTED
                </button>
                  
            </form>

            
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
        </>
        

        
    );
};

export default Form;