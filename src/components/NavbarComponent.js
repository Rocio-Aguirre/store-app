import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
 
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <NavLink exact to='/' className='navbar-brand' activeClassName='active'>Lorem Store</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink exact to='/Contact' className='nav-link' activeClassName='active'>Contact</NavLink>
                    <NavLink exact to="/Trolley" className='nav-link' activeClassName='active'>Trolley</NavLink>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
