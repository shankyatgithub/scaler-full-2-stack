import React, { useState, useEffect } from 'react';
import axios from 'axios'
import URL from '../urlConfig'

function User() {
    const [Users, setUsers] = useState([]);

    /**************getting all the categroies ********************/
    useEffect(() => {
        (async function () {
            //const resp = await fetch(`https://localhost:4201/api/users`)
            //const usersData = await resp.json();
            //setUsers(usersData);
            console.log("calling users endpoint at ", URL.GET_USERS_URL)
            const usersData = await axios.get(URL.GET_USERS_URL)
            console.log(usersData)
            setUsers(usersData)
        })()
    }, [])

    return (
        
            <div> <h1>User</h1>
            {
                Users.length === 0 ? "Loading..." :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users.map((user) => {
                            return (
                                <tr key={user._id}>{user._id}</tr>
                            )
                        }
                        )}
                            
                        
                    </tbody>
                </table>
            }
            </div>

            
    )
       

}

export default User