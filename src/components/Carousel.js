import React from 'react'
import banner1 from '../images/banner13.jpg'
import banner2 from '../images/banner14.jpg'
import banner3 from '../images/banner15.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" id="contenedor">
                <div className="carousel-item active" id='item'>
                <img src={banner1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={banner2} className="d-block w-100" alt="..."/>
                
                </div>
                <div className="carousel-item">
                <img src={banner3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
</div>
    )
}

export default Carousel
