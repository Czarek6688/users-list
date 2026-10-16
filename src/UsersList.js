import { useState } from "react";
import "./UserList.css";

const UserList = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        usertype:''
    });

    const [users, setUsers] = useState([]);
    
const handleInputChange = (e) => {
    
    const target = e.target
    const name = target.name
    setFormData(prevDataForm=>{
        return {...prevDataForm, [name]: target.value}
    })
}

const setUser = (e) => {
    e.preventDefault();
    setUsers(users.concat({...formData, id: Date.now()}));
}

const removeUser = (id) => {
    const filteredUsers = users.filter(user=>user.id !== id);
    setUsers(filteredUsers);
}

console.log(users)

return (<div className="usersList">
    <h2>{formData.username}</h2>
    <h2>{formData.email}</h2>
    <h2>{formData.usertype}</h2>
        <form onSubmit={setUser}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" onChange={handleInputChange} value={formData.username} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
            <label htmlFor="usertype">User type:</label>
            <select id="usertype" name="usertype" onChange={handleInputChange} value={formData.usertype}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            <button>Save</button>
        </form>

       <div className="list">
        <div className="userList">
            {users.map((user) => {
                return ( <div className='userItem' key={user.id} onClick={()=>removeUser(user.id)}>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.usertype}</p>
                </div>)
            })}
        </div>
       </div>

    </div>
    )
};

export default UserList