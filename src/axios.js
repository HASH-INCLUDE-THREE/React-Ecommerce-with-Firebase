import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/hinclude3-8b5d5/us-central1/api'
    
});

export default instance;


