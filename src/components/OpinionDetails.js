//sfc==> stateless functional components
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import OpinionsService from "../services/OpinionsService";
import Moment from 'react-moment';

const OpinionDetails= () => {
    const {id} = useParams();
    const[currentOpinion, setCurrentOpinion] = useState('');
    const history=useNavigate();

    useEffect(() => {
        OpinionsService.get(id)
                    .then(opinion => {
                        setCurrentOpinion(opinion.data);
                    })
                    .catch(error =>{
                        console.log('Something went wrong', error);
                    })
    }, [id]);

    const handleDelete = () =>{
        OpinionsService.remove(id)
                    .then(response =>{
                        history("/forum/opinions");
                    })
                    .catch(error =>{
                        console.log("Something went wrong",error);
                    })
    }   

    const handleEdit= () => {
        //use the history and id that we defined previously
       history(`/forum/opinions/edit/${id}`);
    }
        
    return ( 
        <div className="main-content">
        {
            currentOpinion &&  <div>
                                    <article>
                                        <h5 className="text-capitalize primary-color">{currentOpinion.title}</h5>
                                            <div className="my-3" style={{ marginBottom: '1em' }}>
                                                <Moment fromNow>{currentOpinion.updatedAt}</Moment>
                                            </div>
                                            <div className="my-3" style={{ marginBottom: '1em' }}>
                                                <span className="text-capitalize"> {currentOpinion.category}</span>
                                            </div>
                                            <div className="my-3" style={{ marginBottom: '1em' }}>{currentOpinion.body}</div>
                                    </article>

                                    <button onClick={handleEdit} style={{backgroundColor: "black",color: "white",borderRadius: "5px"}}>Edit</button>
                                    <button onClick={handleDelete} className="ms-3" style={{backgroundColor: "black",color: "white",borderRadius: "5px"}}>Delete</button>  
                                </div>
        }
        </div>
    );
}

export default OpinionDetails;