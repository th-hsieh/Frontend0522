import { useState,useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import OpinionsService from "../services/OpinionsService";
import '../../src/App.css'

/* use useNavigate() instead of useHistory() */

const AddOpinion = () => {
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[category,setCategory] = useState('gender equality');//initial value
    const[errors,setErrors] = useState(false);
    const history = useNavigate();
    const {id} = useParams();

    const saveOpinion = (e) => {
        e.preventDefault();

        if(!title || !body){
            setErrors(true);
            return ;
        }

        const opinion = {title,body,category, id};
        //console.log("printing note",note);

        if(id){
            //if ID exists, then we call the service update method
            OpinionsService.update(opinion)
                        .then(response => {
                            console.log("Opinion updated sucessfully",response.data);
                            history("/forum/opinions");
                        })
                        .catch(error =>{
                            console.log("Something went wrong", error);
                        })
        }else{
            //call the service create method
            OpinionsService.create(opinion)
                        .then(response=>{
                            console.log("Opinions added sucessfully",response.data);
                            history("/forum/opinions");
                         })
                         .catch(error => {
                            console.log('something went wrong',error);
                         })
        }
    }

    useEffect(()=>{
        if (id){
            OpinionsService.get(id)
                        .then(opinion => {
                            setTitle(opinion.data.title);
                            setBody(opinion.data.body);
                            setCategory(opinion.data.category);
                        })
                        .catch(error=>{
                            console.log("Something went wrong", error)
                        })
        }
    }, [id])
    
    return ( 
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-12 text-center">
                  <h2>{id ? "Update an Opinion" : "Add Your Opinion"}</h2>
                  {errors && <span style={{ color: 'red', fontStyle: 'italic' }}>Please enter the mandatory fields</span>}
                </div>
              </div>
          
              <div className="row justify-content-center">
                <div className="col-sm-6">
                  <form>
                    <div className="form-group">
                      <label htmlFor="title">
                        Opinion Title: <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
          
                    <div className="form-group">
                      <label htmlFor="body">
                        Opinion Description: <sup>*</sup>
                      </label>
                      <textarea
                        name="body"
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      ></textarea>
                    </div>
          
                    <div className="form-group">
                      <label htmlFor="category">Opinion Category: </label>
                      <select
                        id="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="gender equality">Gender Equality</option>
                        <option value="health care">Health Care</option>
                        <option value="educational system">Educational System</option>
                      </select>
                    </div>
                    <br/>
                    <div className="text-center">
                      <button
                        onClick={(e) => saveOpinion(e)}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "5px"
                        }}
                      >
                        {id ? "Update An Opinion" : "Add Your Opinion"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
  }
         
    export default AddOpinion;