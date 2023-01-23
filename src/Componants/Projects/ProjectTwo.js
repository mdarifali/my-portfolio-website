import React from 'react';
import img4 from '../Assets/website-images/img4.PNG';
import img5 from '../Assets/website-images/img5.PNG';
import img6 from '../Assets/website-images/img6.PNG';
import img7 from '../Assets/website-images/img7.PNG';



const ProjectTwo = () => {

    return (
        <div className='container mb-5'>
            <div className="row">
                <div className="col-12 p-4">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img7} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img5} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img6} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img4} class="d-block w-100" alt="..." />
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
                <h1 className='text-center mb-5'>Inventory Management</h1>
                <div className="col-12">
                    <ul>
                        <li>
                            <p className='fw-bold fs-5'>Project Summary: </p>
                            <span>
                                This Project is a fully functional and responsive online shopping website that
                                works front-end and back-end.

                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Client features: </p>
                            <span>
                                This website is only for seller they manage all products. Sellers can add new
                                products, update product stock and delete. Users can login and signup using firebase to make sure only
                                authorized users can add.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Admin features: </p>
                            <span>
                                React, React Router, Node.js, Express.js, MongoDB, Bootstrap CSS, Heroku,
                                Firebase and JWT
                            </span>
                        </li>
                    </ul>
                    <div className='text-center my-4'>
                        <h4 className='mb-3'>My Project Website & Code Link</h4>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://inventory-management-web-d2fba.firebaseapp.com/">Live Link</a>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://github.com/mdarifali/inventory-management-website">Git-Clinet</a>
                        <a className='btn btn-outline-success' target='-bank' href="https://github.com/mdarifali/inventory-management-website">Git-Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTwo;