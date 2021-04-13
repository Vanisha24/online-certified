import React from 'react';
import RegisterService from '../services/RegisterService';
import ValidationForm from './ValidationForm';

class CustomerRegistration extends React.Component{
    constructor(props){
        super(props)

        this.state = {
          /* username: this.props.match.params.username,*/
           username:'',
            email : '',
            password : '',
            phoneNo : '',
            address : '',
            
        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.save = this.save.bind(this);

    }

    changeUserNameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changePhoneNoHandler = (event) => {
        this.setState({phoneNo: event.target.value});
    }

    changePasswordHandler =(event) => {
        this.setState({password: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    changeAddressHandler =(event)=> {
        this.setState({address : event.target.value});
    }

    save = (c) => {
        c.preventDefault();
        let customer = this.state;
          console.log('customer => ' + JSON.stringify(customer));
          

        RegisterService.addCustomer(customer).then ( (res) =>{
            console.log(res);
            
            alert("Registration Successfull...You can login now..");
            this.props.history.push('/login');
        })
       
    } 
    cancel(){
        this.props.history.push('/AddCustomer');
    }
   
    render()
        {
            return(
                <div>
                  <nav/>
            
                    <img src="get-certified-online\src\Images\view.jpg"></img>
                  
                    <form className="container">
                        <h2>Get Certified Online</h2>
                        
                    <div className="form-group">
                            <label>User Name:</label>
                            <input type="username" className="form-control" name="username" placeholder="Enter username"
                            value={this.state.username}onChange={this.changeUserNameHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Email address:</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email"
                            value={this.state.email}onChange={this.changeEmailHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter Your Password"
                            value={this.state.password} onChange={this.changePasswordHandler}/>
                        </div>
                        <div className='info'>
                          <small><centre>Password must be eight characters in length.</centre></small>
            </div>
                        
                        <div className="form-group">
                            <label>phoneNo</label>
                            <input type="phoneNo" className="form-control" name="phoneNo" pattern="[1-9]{1}[0-9]{9}"
                                   title="Enter 10 digit mobile number" placeholder="Mobile number" required
                                       value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                               </div>


                        <div className="form-group">
                            <label>Address:</label>
                            <input type ="address" className="form-control" name="address" placeholder="enter your Address"
                            value={this.state.address} onChange={this.changeAddressHandler}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.save}>Register</button>
                         {<button type="reset" className="btn btn-danger ml-3" onClick={this.cancel.bind(this)}>Cancel</button>}
                    </form>
                    <form> <button className="btn btn-success" onClick={this.UpdateRegistration}>Update</button></form>
                   
                    <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
                </div>
            );
        }
    
}
export default CustomerRegistration;
