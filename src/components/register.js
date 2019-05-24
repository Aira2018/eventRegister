import React from 'react';
import {Redirect} from 'react-router-dom';

class Register extends React.Component{
    state ={
            registername : '',
            registeraddress : '',
            registeremail : '',
            redirect : '',
        }
        
    onNameChange = (event) => {
    this.setState({registername : event.target.value})
    }
    onAddressChange = (event) => {
        this.setState({registeraddress : event.target.value})
     }
     onEmailChange = (event) => {
        this.setState({registeremail: event.target.value})
     }
     onRegisterSubmit = () => {
         console.log(this.state)
         fetch('http://localhost:3001/register', {
             method : 'post',
             headers : {
                'Content-type' : 'application/json'
             },
             body : JSON.stringify({
                 name : this.state.registername,
                 address : this.state.registeraddress,
                 email : this.state.registeremail,
            })
         }).then(response => response.json())
         .then(data => {
             if(data.name && data.address && data.email){
                console.log('data recieved from server#',data)
                this.setState({redirect : 'true'})
             }
         })

     }
    
    render(){
        if(this.state.redirect==='true'){
            return <Redirect to='register/success'/>
        }
        return(
            <div className='container'>
                <h1>Aira 2018</h1>
                <div>
                   <h4>Fill the each blanks down, get specefic!!</h4>
                   <h5>so we can help precisely</h5>
                </div>
                <div className='input'>
                    <label>Name:</label>
                    <input type='text' id='name' placeholder='@john snow'
                    onChange={this.onNameChange}/> 
                </div>
                <div className='input'>
                    <label>Address:</label>
                    <input type='text' id='address' placeholder='25 street vantina'
                    onChange={this.onAddressChange}/> 
                </div>
                <div className='input'>
                    <label>Email:</label>
                    <input type='email' id='email' placeholder='john_snow@gmail.com'
                    onChange={this.onEmailChange}/> 
                </div>
                <div>
                    <input type='submit' id='submitForm' value='Register me'
                    onClick={this.onRegisterSubmit}/> 
                </div>
                
            </div>
        )
    }
    
}
export default Register;