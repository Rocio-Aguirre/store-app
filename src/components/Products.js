import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const url= 'https://fakestoreapi.com/products';

const Products = () => {
    const [products, setProducts] = useState([])
    const [trolley, setTrolley] = useState([]);
    const getData = async() =>{
        const res = await axios.get(url)
        setProducts(res.data) 
    
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-2">
                
                {
                    products.map((product) =>(
                        <Product img={product.image} title={product.title} price={product.price} id={product.id} trolley={trolley} setTrolley={setTrolley} products={products}/>
                    ))
                }
                
            </Row>
       </Container>
    )
}

export default Products
