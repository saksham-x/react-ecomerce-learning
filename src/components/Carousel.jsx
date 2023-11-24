import React from 'react'

const Carousel = () => {
    return (
        <>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_1280.jpg" className="d-block w-100" alt="AirJordan 1"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2020/09/17/06/28/sneakers-5578127_1280.jpg" className="d-block w-100" alt="Jordan3"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg" className="d-block w-100" alt="Jordan1Blueroyal"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Carousel
