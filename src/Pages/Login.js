import React, { Component } from 'react'
import './Login.css';
import RequestService from "../Services/RequestService";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

 class Login extends Component {

    constructor() {
        super();
        this.state = {
          username: "tvandervort@example.net",
          password: "password"
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleClick = async (e) => {


        try {
          let test = await RequestService.userLogin(this.state.username, this.state.password);
         
          if ( test.data ){
            cookies.set('access', JSON.stringify(test.data.access_token))
            this.props.history.push("/");
          }
         

        } catch (error) {
          console.log('error');
        }
        
        


        

       };

    render() {
        
        return (
            <div id="formContent" style={{ margin: "10rem auto" }}>
                <form>
                    <input 
                            name="username"
                            type="text" 
                            id="login" 
                            className="fadeIn second" 
                            placeholder="login"
                            value={this.state.username}
                            onChange = {this.handleChange}
                    />

                    <input 
                            name="password"
                            type="password" 
                            id="password" 
                            className="fadeIn second"  
                            placeholder="password"
                            value={this.state.password}
                            onChange = {this.handleChange}
                    />
                    
                    <button
                         className="btn btn-block btn-primary fourth"
                         onClick={(e) => {
                            e.preventDefault();
                            this.handleClick();
                          }}
                         
                         >Login
                         
                         </button>
                </form>
            </div>
        )
    }
}

export default Login
