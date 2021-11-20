import Carousel from '../components/Carousel';
import React, { Fragment} from 'react'
import Products from '../components/Products';

const Home = () => {
   
    return (
        <Fragment>
            <Carousel/>
            <Products/>
        </Fragment>
    )
}

export default Home
