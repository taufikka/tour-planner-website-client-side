import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    }

    // header navbar section
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold'>Travelo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink activeStyle={activeStyle} className='nav' to="/home">Home</NavLink>
                        {
                            user?.email ? <div>

                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/order">My Booking</NavLink>

                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/allOrders">Manage All Booking</NavLink>

                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/addService">Add New Service</NavLink>

                                <NavLink to='/'> <button onClick={logOut} className='mx-2 btn-primary'>Log out</button> </NavLink>
                            </div>
                                :
                                <NavLink activeStyle={activeStyle} className='nav' to="/login">Login</NavLink>
                        }
                        <Navbar.Text>
                            logged in as: <small className='fw-bold text-white'>{user?.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;







/*




                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                        <li><a class="dropdown-item active" href="##">Action</a></li>
                                        <li><a class="dropdown-item" href="##">Another action</a></li>
                                        <li><a class="dropdown-item" href="##">Something else here</a></li>
                                        <li><a class="dropdown-item" href="##">Separated link</a></li>
                                    </ul>
                                </div>





*/
