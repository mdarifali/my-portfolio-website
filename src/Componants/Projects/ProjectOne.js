import React from 'react';
import img1 from '../Assets/website-images/img1.PNG'
import img2 from '../Assets/website-images/img2.PNG'
import img3 from '../Assets/website-images/img3.PNG'



const ProjectOne = () => {

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
                                <img src={img1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..." />
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
                <h1 className='text-center mb-5'>Tools Manufacturer Website</h1>
                <div className="col-12">
                    <ul>
                        <li>
                            <p className='fw-bold fs-5'>Project Summary: </p>
                            <span>
                                This Project is a fully functional and responsive wholesale online shopping
                                website that works front-end and back-end.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Client features: </p>
                            <span>
                                The client makes an order, changes order quantity, the client added profile &
                                update, manage orders, add a review, make payment with a credit card, and checks order status, client
                                dashboard and user login & signup with firebase.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Admin features: </p>
                            <span>
                                This Project is a fully functional and responsive wholesale online shopping
                                website that works front-end and back-end.The Admin access his dashboard to manage, orders status, Remove existing
                                Products, Remove Unpaid User orders, Update Shipping Status, and Create New Admin.
                            </span>
                        </li>
                        <li>
                            <p className='fw-bold fs-5'>Technology Used: </p>
                            <span>
                                React, React Router, React-Hook-Form, Node.js, Express.js, MongoDB,
                                Tailwind CSS, Stripe-Payment, Heroku, Firebase and JWT
                            </span>
                        </li>
                    </ul>
                    <div className='text-center my-4'>
                        <h4 className='mb-3'>My Project Website & Code Link</h4>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://car-parts-manufacturers.web.app/">Live Link</a>
                        <a className='btn btn-outline-success me-4' target='-bank' href="https://github.com/mdarifali/tools-manufacturer-website">Git-Clinet</a>
                        <a className='btn btn-outline-success' target='-bank' href="https://github.com/mdarifali/tools-manufacturer-website-server">Git-Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;