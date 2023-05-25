import axios from "axios";

const backendAPI = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json"
  }
});

export default backendAPI;