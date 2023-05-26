import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Register() {

  const [collaboratorname, setCollaboratorname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  async function save(event){
    event.preventDefault();
    try{
      //remember to change this when deploy to cloud to "http://localhost:198.XXXXX/collaborator/save
        await axios.post("http://localhost:8080/collaborator/save", {
            collaboratorname:collaboratorname,
            email:email,
            password:password,
        });

        alert("Now you are Collaborator!");
        navigate('/about');

    } catch (err){
        alert(err);
    }
    navigate('/about');
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 text-center">
          <h2 className="text-center">Come Join As Collaborator!</h2>
        </div>
      </div>
      
      <div className="row justify-content-center">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="collaboratorname">How should we call you?</label>
                <input
                  type="text"
                  className="form-control"
                  id="collaboratorname"
                  placeholder="Name"
                  value={collaboratorname}
                  onChange={(event) => setCollaboratorname(event.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} />
              </div>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  onClick={save}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5px",
                  }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}
export default Register;
