import React, {useEffect, useState} from 'react';
import axios from "axios"
import {useParams} from 'react-router-dom'
const Showdetails = ()=> {
    const {id} = useParams();
    const[users, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers = async()=>{
        const res = await axios.get(`//localhost:3003/users/${id}`);
        setUser(res.data)
        console.log(users)
    } 

   
    return(
    <div>
        <div className="container  py-4 border shadow">
        <h1>Details</h1>
        Name:  {users.name}<br></br>
        Username: {users.username}<br></br>
        Email:  {users.email}<br></br>
        Phone:  {users.phone}<br></br>
        Website:  {users.website}<br></br>
        </div>
        </div>
    )
}
export default Showdetails ;
