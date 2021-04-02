import axios from "axios";

const instanceAxios = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/http-vuejs-77e10/databases/(default)/documents",
});

export default instanceAxios;
