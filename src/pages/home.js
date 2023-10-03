import React from 'react';

export default function Home() {
    return (       
        <section id="home" className='container-home'>
        {/* Banner imagenes */}
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <a class="nav-link" href='/'>
                        <img src={require('../images/home/MS2.jpg')} class="d-block w-100" alt="MS2"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Spider-Man 2</h5>
                            <p>Aspira a ser el mejor juego de octubre y del año.</p>
                        </div>
                    </a> 
                    </div>
                    <div class="carousel-item">
                        <a class="nav-link" href='/'>
                            <img src={require('../images/home/diablo4.avif')} class="d-block w-100" alt="diablo4"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </a>                    
                    </div>
                    <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>            
        </section>
    );
};