import React, { useState, useEffect } from 'react';

function User() {
    const [Users, setUsers] = useState([]);

    /**************getting all the categroies ********************/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://localhost:4201/api/users`)
            const usersData = await resp.json();
            setUsers(usersData);
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