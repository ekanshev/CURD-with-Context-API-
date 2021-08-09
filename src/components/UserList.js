import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  return (


    
    <table className="table table-dark table-striped table-responsive" >
    <thead className="thead-light ">
      <tr className="inline-flex">
        <th scope="col">#</th>
        <th scope="col">Nmae</th>
        <th scope="col">Roll number</th>
        <th scope="col">age</th>
        <th scope="col">Gender</th>
        
       <th>Action</th>
      </tr>
    </thead>
      <tbody>
      {users.map((user, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.rollnumber}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>
            <div className=".mr-4 d-flex">
            <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button  onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                </div>
         {/*   <Link
            className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
              Edit
            </Link>
            <Link className="btn btn-danger">
              Delete
         </Link> */}
          </td>
            </tr>
      ))}
      </tbody>
  </table>
 

 
  )
}