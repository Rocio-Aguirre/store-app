import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product';

const url= 'https://fakestoreapi.com/products';

const Products = () => {
    const [products, setProducts] = useState([])
    const getData = async() =>{
        const res = await axios.get(url)
        setProducts(res.data) 
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    products.map((product, index) =>(
                        <Product img={product.image} title={product.title} price={product.price} key={index}/>
                    ))
                    }
            </div>
       </div>
    )
}

export default Products
