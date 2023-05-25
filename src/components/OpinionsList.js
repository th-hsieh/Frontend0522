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
        <div className="row justify-content-center">
            <div className="col-sm-12 text-center">
                <h2>List of Opinions</h2>
            </div>
          
            <div className="row justify-content-center">
                <div className="mt-4">
                  {
                    opinions.length > 0 ? (
                      opinions.map(opinion => (
                        <div key={opinion.id} className="opinions-preview mt-3">
                          <Link to={`/forum/opinions/${opinion.id}`} className="text-decoration-none">
                            <h5 className="primary-color text-capitalize">{opinion.title}</h5>
                            <h6 className="text-capitalize">{opinion.category}</h6>
                          </Link>
                          <Moment fromNow style={{ fontStyle: 'italic' }}>{opinion.updatedAt}</Moment>
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
        );
}
export default OpinionsList;       