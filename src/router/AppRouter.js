import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trolley from '../pages/Trolley';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Error from '../pages/Error';
import NavbarComponent from '../components/NavbarComponent';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent/>
                <Switch>
                    <Route path='/Trolley' component={Trolley} />
                    <Route path='/Contact' component={Contact} />
                    <Route exact path='/' component={Home}/>
                    <Route path='*' component={Error} />
                </Switch>
            </BrowserRouter>
    )
}
export default AppRouter