import Axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './adduser.css';

const Adduser = ()=>{
    let history = useHistory();
        const[users, setUser]=useState({
                name:"",
                username:"",
                email:"",
                phone:"",
                website:""
        });

        const changeHandler=(event)=>{
            setUser({...users, [event.target.name]:event.target.value})
        };
        const submitHandler= async event=>{
            event.preventDefault();
            await Axios.post("http://localhost:3003/users", users);
            history.push("/");



        }


    return(
        <div>
            <div className="container py-4 border shadow">
                <h1>Add a User</h1>
            <form onSubmit={submitHandler}>
            <div class="form-group">
                    <input
                     type="text" 
                     name="name"
                     value={users.name}
                     onChange={changeHandler}
                    placeholder="enter your name"
                    class="form-control form-control-lg"
                     ></input>
                </div>
                <div class="form-group">
                    <input
                     type="text"
                     name="username"
                     value={users.username}
                     onChange={changeHandler}
                    placeholder="enter your Username"
                     class="form-control form-control-lg"
                      ></input>
                </div>
                <div class="form-group">
                    <input
                     type="text"
                     name="email"
                     value={users.email}
                     onChange={changeHandler}
                    placeholder="enter your email-address"
                     class="form-control form-control-lg" 
                      ></input>
                </div>
                <div class="form-group">
                    <input
                     type="text"
                     name="phone"
                     value={users.phone}
                     onChange={changeHandler}
                    placeholder="enter your phone number"
                     class="form-control form-control-lg"
                      ></input>
                </div>
                <div class="form-group ">
                    <input
                     type="text"
                     name="website"
                     value={users.website}
                     onChange={changeHandler}
                    placeholder="enter your website name"
                     class="form-control form-control-lg"
                     ></input>
                </div>
                <button type="submit"
                 class="btn btn-primary"
                 >Submit</button>
                </form>
            </div>
        </div>
    )
        
    
}
export default Adduser;