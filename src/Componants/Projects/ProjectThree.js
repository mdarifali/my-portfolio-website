import React from 'react';
import img8 from '../Assets/website-images/img8.PNG';
import img9 from '../Assets/website-images/img9.PNG';
import img10 from '../Assets/website-images/img10.PNG';


const ProjectThree = () => {

    return (
        <div className='container mb-5'>
            <div className="row">
                <div className="col-12 p-4">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img8} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img9} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img10} class="d-block w-100" alt="..." />
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
            </div>
            <div className="row my-5 text-white">
                <h1 className='text-center mb-5'>Online Fitness Trainer</h1>
                <div className="col-12">
                    <ul>
                        <li>
                            <p className='fw-bold fs-5'>Project Summary: </p>
                            <span>
                                This Project is responsive personal service provider website that works front-end.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Client features: </p>
                            <span>
                                This website is used for personal online fitness trainer booking. The client
                                describes his service details and price for who booking by the website. A user can register the user's
                                email and password, then the user booking any package.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Admin features: </p>
                            <span>
                                React, React Router, Bootstrap CSS & Firebase.
                            </span>
                        </li>
                    </ul>
                    <div className='text-center my-4'>
                        <h4 className='mb-3'>My Project Website & Code Link</h4>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://online-fitness-trainer.web.app/">Live Link</a>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://github.com/mdarifali/independent-service-provider">Git-Clinet</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;