import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";



const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate('');

  const handleChange = (event) =>{
    event.preventDefault();
    dispatch(addUser({name:name, email:email, id: users[users.length - 1].id + 1}));
    navigate('/');

  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
      <h2 className="d-flex justify-content-center">Add New User</h2>
        <form className="d-flex gap-3 flex-column" onSubmit={handleChange}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={e=> setName(e.target.value)} className="form-control" placeholder="Enter your name"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onChange={e=> setEmail(e.target.value)} className="form-control" placeholder="Enter your email"/>
          </div><br/>
          <button className="btn btn-info" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
