import React, {useEffect, useState} from 'react';
import axios from "axios"
import {Link, useHistory} from 'react-router-dom'
const Home = ()=> {
    let history = useHistory();
    const[users, setUser] = useState([]);
    useEffect(()=>{
        loadUsers();
    },[])
    const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse())
    } 

    const deleteuser=async id =>{
         await axios.delete(`//localhost:3003/users/${id}`)
         history.push("/");
    }
    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
    <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-primary mr-2" to={`/showdetails/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary mr-2" to={`/edituser/${user.id}`}>Edit</Link>
                <Link className="btn btn-danger mr-2" onClick={()=>deleteuser(user.id)} to="/delete/:id">Delete</Link>
            </td>
            </tr>
    ))
    }
  </tbody>
</table>


            </div>
        </div>
    )
}
export default Home;
