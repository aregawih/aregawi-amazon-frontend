import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/",
  // deployed version of amazon server on render.com 
  baseURL: "https://amazon-api-deploy-78j6.onrender.com/",
});
export {axiosInstance}
