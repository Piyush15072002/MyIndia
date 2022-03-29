import React from 'react'

const Carousel = () => {
    return (
        <>  <div className="main">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: "600px", width: "100%" }} src={require("../pictures/bridge.jpg")} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Our beautiful India</h5>
                            <p>MyIndia</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "600px", width: "100%" }} src={require("../pictures/elephant.jpg")} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Our Glorious India</h5>
                            <p>MyIndia</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "600px", width: "100%" }} src={require("../pictures/holi.jpg")} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Traditions of India</h5>
                            <p>MyIndia</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img style={{ height: "600px", width: "100%" }} src={require("../pictures/east.jpg")} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Culture of India</h5>
                            <p>MyIndia</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Carousel