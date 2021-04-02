import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

export default instanceAxios;
