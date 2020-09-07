import React, { Component } from 'react';
import axios from '../axios';
import Spinner from '../Spinner/Spinner';

class Registration extends Component {
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: "",
            loading: false,
        }
    }

    handleSubmit(event){
        const user = {
            email: this.state.email,
            password: this.state.password,
            
        };
        axios.post('/users.json', user)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
        
    }


    render(){
        let  form =         
            <form onSubmit ={this.handleSubmit}>
                <input 
                    type = "email"
                    name = "email" 
                    placeholder="Email" 
                    value = {this.state.email} 
                    onChange={this.handleChange} 
                    required 
                />
                <input 
                    type = "password"
                    name = "password" 
                    placeholder="Password" 
                    value = {this.state.password} 
                    onChange={this.handleChange} 
                    required 
                />
                <input 
                    type = "password"
                    name = "password_confirmation" 
                    placeholder="Password confirmation" 
                    value = {this.state.password_confirmation} 
                    onChange={this.handleChange} 
                    required 
                />
                <button>Register</button>
            </form>;

        if (this.state.loading){
            form = <Spinner/>
        }
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input 
                        type = "email"
                        name = "email" 
                        placeholder="Email" 
                        value = {this.state.email} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type = "password"
                        name = "password" 
                        placeholder="Password" 
                        value = {this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <input 
                        type = "password"
                        name = "password_confirmation" 
                        placeholder="Password confirmation" 
                        value = {this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <button>Register</button>
                </form>
            </div>
        );
    }
}
export default Registration;