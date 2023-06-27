import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const DisplayUser = (props) => {
    
    function setName(val)
    {
        const tempUser = {id: "",name: "",email: "",phone_no: ""};
        tempUser["id"] = props.user.id;
        tempUser["name"] = val;
        tempUser["email"] = props.user.email;
        tempUser["phone_no"] = props.user.phone_no;
        props.setUser(tempUser);
    }
    function setEmail(val)
    {
        const tempUser = {name: "",email: "",phone_no: ""};
        tempUser["id"] = props.user.id;
        tempUser["name"] = props.user.name;
        tempUser["email"] = val;
        tempUser["phone_no"] = props.user.phone_no;
        props.setUser(tempUser);
    }
    function setPhone(val)
    {
        const tempUser = {name: "",email: "",phone_no: ""};
        tempUser["id"] = props.user.id;
        tempUser["name"] = props.user.name;
        tempUser["email"] = props.user.email;
        tempUser["phone_no"] = parseInt(val,10);
        props.setUser(tempUser);
    }

    return (<div className="userForm">
        <Form onSubmit={(e)=>{
            e.preventDefault();
            props.isUpdate?props.updateUser():props.addUser(props.user)}}>
            <Form.Group>
                <Form.Label>
                    Email:
                </Form.Label>
                {props.isUpdate?<Form.Control type="email" defaultValue={props.user.email} readOnly disabled/>:
                <Form.Control type="email" defaultValue={props.user.email} onChange={(e)=>{setEmail(e.target.value)}}/>}
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Name:
                </Form.Label>
                <Form.Control type="text" defaultValue={props.user.name} onChange={(e)=>{setName(e.target.value)}} required />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Phone No:
                </Form.Label>
                <Form.Control defaultValue={props.user.phone_no} type="text" pattern="[0-9]{9,12}" title="Enter valid number" onChange={(e)=>{setPhone(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Submit</Button>
        </Form>
    </div >)
};

export default DisplayUser;