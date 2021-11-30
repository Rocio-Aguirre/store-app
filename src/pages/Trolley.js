import React, { Fragment, useContext} from 'react'
import { CloseButton, Container, Row, Table } from 'react-bootstrap';
import { StoreContext } from '../store/StoreProvider'
import { types } from '../store/StoreReducer';

const Trolley = () => {
    const [store, dispatch] = useContext(StoreContext)
    const {trolley} = store;

    store.total = 0;
    const sumar = () =>{
        trolley.map((product) => (
        console.log(store.total += product.price * product.quantity)))
    }
    sumar()

    return (
            <Fragment>
                <Container>
                   <Row className="mt-4"> 
                        {trolley.length === 0 ? 
                        (    
                            <div>
                                <h2>Your bag is empty. </h2>
                            </div>
                            
                        ):
                        <Table>
                            <tbody>
                                {   
                                trolley.map((product) =>(
                                    <tr key={product.id}>
                                        <td><img alt="" src={product.img} style={{width: '4rem'}}/></td>
                                        <td>{product.title}</td>
                                        <td>quantity: {product.quantity}</td>
                                        <td>$ {product.price}</td> 
                                        <td><CloseButton onClick={()=>dispatch({type: types.PRODUCT_DELETE_TROLLEY, payload: product.id})}/></td>
                                    </tr>
                                ))
                                }
                                <tr>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>$ {store.total.toFixed(2)}</td>
                                    <td> </td>
                                
                                </tr>
                            </tbody>
                        </Table>
                        }
                    </Row>
                </Container>
            </Fragment>
    )
}

export default Trolley
