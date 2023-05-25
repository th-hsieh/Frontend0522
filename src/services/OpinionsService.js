import httpClient from "../http-common";

//R
const getAll=() =>{
    return httpClient.get("/forum/opinions");
}

//C
const create = data =>{
    return httpClient.post("/forum/opinions",data);
}

//這邊我應該要寫"/forum/opinions/add"嗎？
//return httpClient.post("/forum/opinions/add",data);

//R
const get = id =>{
    return httpClient.get(`/forum/opinions/${id}`);
}

//D
const remove = id =>{
    return httpClient.delete(`/forum/opinions/${id}`);
}

//U
const update =  data =>{
    return httpClient.put('/forum/opinions',data);
}

export default { getAll,create,get,remove, update};