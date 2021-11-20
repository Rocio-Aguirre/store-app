import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route path='/Carrito' component={Cart} />
                    <Route path='/Contacto' component={Contact} />
                    <Route exact path='/' component={Home}/>
                    <Route path='*' component={Error} />
                </Switch>
            </BrowserRouter>
    )
}
export default AppRouter