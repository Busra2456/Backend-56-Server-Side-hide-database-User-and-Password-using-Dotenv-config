import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
      const loaderUser = useLoaderData();
      const [users,setUsers] = useState(loaderUser);
      const handleDelete = id =>{
            // make sure user is confirmed to delete
            fetch(`http://localhost:13000/user/${id}`,{
                  method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                 if( data.deletedCount > 0){
                  console.log('deleted successfully');
                  //remove the user from the UT
                  const remainingUsers = users.filter(user => user._id !== id);
                  setUsers(remainingUsers);
                 }
            })

      }
      return (
            <div>
                  <h1>users: {users.length}  </h1>

                  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <tr className="bg-base-200">
       <tb></tb>
        <td>Email</td>
        <td>Created At</td>
        <tb>Last Logged In</tb>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
     
     {
      users.map(user => <tr key={user._id} className="bg-base-200">
            <tb></tb>
            <td> {user.email} </td>
            <td> {user.createdAt} </td>
            <tb> {user.lastLoggedAt} </tb>
            <td>
                  <button onClick={ () =>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
            </div>
      );
};

export default Users;