import React from 'react';

const initialState ={
    username:"",
    email: "",
    password: "",
    phoneNo:"",
    address:"",
    usernameError:"",
    emailError: "",
    passwordError: "",
    phoneNoError:"",
    addressError:"",
};

export default class ValidationForm extends React.Component{
    state =initialState;

    handleChange = event => {
    const isCheckbox = event.target.type ==="checkbox";
      
    this.setState({
        [event.target.name]: isCheckbox
        ?event.target.checked
        :event.target.value
    });
};

validate = () => {
    let usernameError ="";
    let emailError= "";
   let passwordError="";

    if (!this.state.username) {
        usernameError ="name cannot be empty";
    }

    if (!this.state.email) {
        emailError = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
        emailError = 'Email address is invalid';
      }

    if (!this.state.password) {
        passwordError = "password required";
    } else if (this.state.password.length<8){
        passwordError ="It Must be greater than 8 letters"
    }
    

    if( usernameError || emailError || passwordError ) {
        this.setState({usernameError , emailError , passwordError });
        return false;
    }

    return true;
};

handleSubmit = event =>
{
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
        console.log(this.state);
    }
}
render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <input
                name="username" placeholder ="username" value={this.state.username}
                onChange={this.handleChange}/>
                <div style={{ fontSize: 10, color: "red" }}>
                   {this.state.usernameError}
                </div>
            </div>
            
            <div>
                <input
                name="email" placeholder ="email" value={this.state.email}
                onChange={this.handleChange}/>
                <div style={{ fontSize: 10, color: "red" }}>
                   {this.state.emailError}
                </div>
            </div>

            <div>
                <input
                name="password" placeholder ="password" value={this.state.password}
                onChange={this.handleChange}/>
                <div style={{ fontSize: 10, color: "red" }}>
                   {this.state.passwordError}
                </div>
            </div>

            <div>
                <input
                name="phoneNo" placeholder ="phoneNo" value={this.state.phoneNo}
                onChange={this.handleChange}/>
                <div style={{ fontSize: 10, color: "red" }}>
                   {this.state.phoneNoError}
                </div>
            </div>

            <div>
                <input
                name="address" placeholder ="address" value={this.state.address}
                onChange={this.handleChange}/>
                <div style={{ fontSize: 10, color: "red" }}>
                   {this.state.addressError}
                </div>
            </div>

            <button type="submit"> Register </button>
        </form>
    );
}
}
