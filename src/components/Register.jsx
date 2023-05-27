import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [collaborator_name, setCollaboratorname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function reloadForm() {
    setCollaboratorname('');
    setEmail('');
    setPassword('');
  }
  
  async function save(event) {
    event.preventDefault();
    try {
      // Remember to change this when deploying to the cloud: "http://198.XXXXX/collaborator/save"
      await axios.post("http://localhost:8080/collaborator/save", {
        collaborator_name: collaborator_name,
        email: email,
        password: password,
      });
      alert("Now you are a Collaborator!");
      navigate('/about');
    } catch (err) {
      if (err.response) {
        if (err.response.data === "An email address can only be registered for a collaborator account.") {
          setErrorMessage("An email address can only be registered for a collaborator account.");
          alert("An email address can only be registered for a collaborator account.");
          reloadForm();
        } else {
          setErrorMessage(err.response.data);
          alert(err.response.data);
          reloadForm();
        }
      } else {
        alert("An error occurred. Please try again.");
        reloadForm();
      }
    }
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
          <form onSubmit={save}>
            <div className="form-group">
              <label htmlFor="collaborator_name">How should we call you?</label>
              <input
                type="text"
                className="form-control"
                id="collaborator_name"
                placeholder="Name"
                value={collaborator_name}
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
