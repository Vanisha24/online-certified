import axios from "axios";

const API_URL = "http://localhost:8086/customer";

class formService { 
  

  CustomerRegistration(username, email, password,phoneNo,address) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
      phoneNo,
      address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default  formService;