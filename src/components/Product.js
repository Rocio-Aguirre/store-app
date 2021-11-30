import React, { useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { StoreContext } from '../store/StoreProvider'
import { types } from '../store/StoreReducer'
import Col from 'react-bootstrap/Col'

const Product = ({img, title, price, id, trolley, setTrolley, products}) => {

    const dispatch = useContext(StoreContext)


    return (
        <Col className="mt-4">
            <Card className="tam text-center" border="secondary">
                <Container className="p-4">
                    { (title === "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet") || (title === "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive")?
                        <Card.Img variant="top" src={img} className="card-img-top pic" style= {{ width:"4em" }}/>
                   :
                        <Card.Img variant="top" src={img} className="card-img-top pic" style= {{ width:"6em" }}/>
                    }
                    <div className="row">
                    <Card.Body className="text-center">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        $ {price}
                        </Card.Text>
                        <Button variant="warning" onClick={()=>dispatch({type: types.PRODUCT_ADD_TROLLEY, payload: {id, title, img, price}})}>Add to cart</Button>
                    </Card.Body>
                    </div>
                </Container>
            </Card>
        </Col>
    )
}

export default Product
