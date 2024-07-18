import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/birthday";

export const dbList = () => axios.get(REST_API_BASE_URL);

export const getByDob = (dob) => axios.get(REST_API_BASE_URL + "/" + dob);

export const uploadPersonData = (details) =>
  axios.post(REST_API_BASE_URL + "/upload", details, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
