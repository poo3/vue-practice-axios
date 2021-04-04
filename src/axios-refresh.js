import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://securetoken.googleapis.com/v1",
});

export default instanceAxios;
