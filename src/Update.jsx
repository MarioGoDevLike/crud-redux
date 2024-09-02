import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "./UserReducer";

export const Update = () => {
  const users = useSelector((state) => state.users);
  const {id} = useParams();
  const existingUser = users.filter(f => f.id == id);
  console.log(users);
  const {name, email} = existingUser[0]; 
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate("");


  const handleChange = (event)=>{
    event.preventDefault();
    dispatch(updateUser({name:uname, email:uemail, id: id}));
    navigate('/');
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2 className="d-flex justify-content-center">Update User</h2>
        <form className="d-flex gap-3 flex-column" onSubmit={handleChange}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={uname} 
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};
