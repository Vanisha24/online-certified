import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8086/customer";

class RegisterSevice{

    viewAllCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL + '/viewAllCustomers');
    }

    viewCustomerByEmail(email){
        return axios.get(CUSTOMER_API_BASE_URL + '/viewCustomer/email');
    }

    addCustomer(c){
        const headers={
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":"*"
        }
        return axios.post(CUSTOMER_API_BASE_URL + '/addCustomer',c,{
            headers: headers
        });
    }

    verifyCustomer(email, password){
        return axios.get(CUSTOMER_API_BASE_URL + '/verifyCustomer/email/password');
    }

    verifyPhoneNo(email, phoneNo){
        return axios.get(CUSTOMER_API_BASE_URL +'/verifyPhoneNo/email/phoneNo');
    }

    updateCustomer(email){
        return axios.put(CUSTOMER_API_BASE_URL +'/update/email');
    }

    updateCustomerPhone(email,phone){
        return axios.patch(CUSTOMER_API_BASE_URL +'/updateCustomerPhone/email/phone');
    }

    updateCustomerAddress(email,address){
        return axios.patch(CUSTOMER_API_BASE_URL +'/updateCustomerAddress/email/address');
    }

    updateCustomerPassword(email, password){
        return axios.patch(CUSTOMER_API_BASE_URL +'/updateCustomerPassword/email/password');
    }

}
export default new RegisterSevice()