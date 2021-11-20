import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <div className="col-md-4">
                <NavLink exact to='/' className='navbar-brand' activeClassName='active'>Lorem Store</NavLink>
                </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="col-md-4">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to='/contacto' className='nav-link' activeClassName='active'>Contacto</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/carrito' className='nav-link' activeClassName='active'>Carrito</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4" >
                            <form className="d-flex" id="formSearch" >
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" id="inputBusqueda" /> {/*onChange={e => setSearch(e.target.value)}*/}
                            </form>
                        </div>
                </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
