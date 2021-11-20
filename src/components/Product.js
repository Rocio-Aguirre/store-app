import React from 'react'

const Product = ({img, title, price}) => {
    return (
        <div className="col-md-3 m-4">
            <div className="card tam text-center" style={{justifyContent: 'center'}}>
                <div className="container p-4">
                        <img src={img} className="card-img-top pic" style={{width:"85px"}} alt=""/>
                    <div className="row">
                        <div className="card-body text-center">
                            <h6 className="card-title">{title}</h6>
                            <p className="card-text">$ {price}</p>
                            <button className="btn btn-warning me-md-2" id="">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
