import axios from "axios"; 

export default axios.create({

    //baseURL:"http://159.89.196.20:8080/",
     baseURL:"http://localhost:8080/",
     
     headers:{
      "Content-type":"application/json"
    }
})
