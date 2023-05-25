import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    async function login(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/collaborator/login",{
                email: email,
                password: password,
            }).then((res) => {

                console.log(res.data);

                if(res.data.message === "Email Doesn't exist")
                {
                    alert("Email doesn't exist");
                }
                else if(res.data.message === "Login Success")
                {
                    navigate('/about');
                }
                else
                {
                    alert('Incorrect. Email and Password do not match');
                }
                },fail => {
                    console.error(fail);//Error!
                });
            }
            catch(err){
                alert(err);
            }
    }
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 text-center">
              <h2 className="text-center">Login As Collaborator</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
      
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <br />

                <div className="text-center">
                    <button
                        type="submit"
                        onClick={login}
                        style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "5px",
                        }}>
                        Login
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
}

export default Login;   
