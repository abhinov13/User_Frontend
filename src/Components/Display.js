import React from 'react';
import { Table, Button } from 'react-bootstrap';


const Display = (props) => {    
    
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone no.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(props.data).map((user,index) => ( 
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_no}</td>
                                <td><Button variant="secondary" onClick={() => {props.switchMethod({id: user.id,name: user.name, email: user.email, phone_no: user.phone_no})}}>Update</Button></td>
                                <td><Button variant="danger" onClick={() => {props.deleteUser(user)}}>Delete</Button></td>
                            </tr>)
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Display