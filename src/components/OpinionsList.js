import {useEffect, useState} from "react";
import OpinionsService from "../services/OpinionsService";
import {Link} from "react-router-dom";
import Moment from "react-moment"

const OpinionsList = () => {

    const[opinions, setOpinions]= useState([]);

    /*useEffect Hook */

    /*this is an async call */
    useEffect(()=>{
        OpinionsService.getAll()
                       .then(response =>{
                            console.log('printing response',response.data);
                            setOpinions(response.data);
                       })
                        .catch(error=>{
                            console.log('something went wrong',error);
                       })
    },[]);

    return (
      <div className="container">

          <div className="row justify-content-center">
            <div className="col-sm-6 text-center">
                <h2>List of Opinions</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 text-center">
              <div className="mb-3 d-flex flex-column align-items-center" style={{ width: '100%', margin: '0 auto' }}>
              {
                opinions.length > 0 ? (
                  opinions.map(opinion => (
                  <div key={opinion.id} className="mb-3">  
                    <Link to={`/forum/opinions/${opinion.id}`} className="text-decoration-none">
                      <h5 className="text-capitalize" style={{ backgroundColor: "gray",color: "white",borderRadius: "5px", margin: '0em 0em 0em 0em'}}>{opinion.title}</h5> 
                      <h6 className="text-capitalize text-center">{opinion.category}</h6>
                    <Moment className="text-center" fromNow style={{ fontStyle: 'italic' }}>{opinion.updatedAt}</Moment>
                    </Link>
                  </div>
                  ))
                  ) : (
                  <div className="text-center">
                    <h5>No opinions available</h5>
                  </div>
                )
              }
              </div>
            </div>
          </div>
      </div>
   
        );
}
export default OpinionsList;       