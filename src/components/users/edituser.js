import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory, useParams } from 'react-router-dom'

const Edituser = ()=>{
    let history = useHistory();
    const {id} = useParams();
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

        useEffect(()=>{
            loaduser();
        },[])
        const submitHandler= async event=>{
            event.preventDefault();
            await axios.put(`//localhost:3003/users/${id}`,users);
            history.push("/");

        }

        const loaduser= async()=>{
            const result = await axios.get(`//localhost:3003/users/${id}`);
            setUser(result.data)
            console.log(result)
        }


    return(
        <div>
            <div className="container py-4 border shadow">
                <h1>Edit User</h1>
            <form onSubmit={submitHandler}>
            <div className="form-group">
                    <input
                     type="text" 
                     name="name"
                     value={users.name}
                     onChange={changeHandler}
                    placeholder="enter your name"
                    className="form-control form-control-lg"
                     ></input>
                </div>
                <div className="form-group">
                    <input
                     type="text"
                     name="username"
                     value={users.username}
                     onChange={changeHandler}
                    placeholder="enter your Username"
                     className="form-control form-control-lg"
                      ></input>
                </div>
                <div className="form-group">
                    <input
                     type="text"
                     name="email"
                     value={users.email}
                     onChange={changeHandler}
                    placeholder="enter your email-address"
                     className="form-control form-control-lg" 
                      ></input>
                </div>
                <div className="form-group">
                    <input
                     type="text"
                     name="phone"
                     value={users.phone}
                     onChange={changeHandler}
                    placeholder="enter your phone number"
                     className="form-control form-control-lg"
                      ></input>
                </div>
                <div className="form-group ">
                    <input
                     type="text"
                     name="website"
                     value={users.website}
                     onChange={changeHandler}
                    placeholder="enter your website name"
                     className="form-control form-control-lg"
                     ></input>
                </div>
                <button type="submit"
                 className="btn btn-primary"
                 >update user</button>
                </form>
            </div>
        </div>
    )
        
}


export default Edituser