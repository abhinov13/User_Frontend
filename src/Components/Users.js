
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const Users = (props) => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Users</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant='success' onClick={() => {props.switchMethod()}}>Add User</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Users;