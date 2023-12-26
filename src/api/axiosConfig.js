import axios from "axios";

export default axios.create({
  baseURL: "https://1118-129-205-124-243.ngrok-free.app",
  // baseURL: "http://localhost:8080",
  headers: {"ngrok-skip-browser-warning": "true"}
})