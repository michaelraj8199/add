import axios from "axios";

const token = sessionStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.defaults.headers.post["token"] = token;
axiosInstance.defaults.headers.get["token"] = token;
export { axiosInstance };
