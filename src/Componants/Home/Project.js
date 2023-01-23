import React from 'react';
import project1 from '../Assets/website-images/project-1.png';
import project2 from '../Assets/website-images/project-2.png';
import project3 from '../Assets/website-images/project-3.png';
import project4 from '../Assets/website-images/project-4.png';
import project5 from '../Assets/website-images/project-5.png';
import project6 from '../Assets/website-images/project-6.png';
import { Link } from 'react-router-dom';

const Project = () => {

    return (
        <div className='container py-5' id='project'>
            <h1 className='text-center text-white my-5'>My Latest Project</h1>
            <div className="row g-5">
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <img src={project2} class="card-img-top" alt="..." />
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Tools Manufacturer Website</h5>
                            <p class="card-text">This Project is a fully functional and responsive wholesale online shopping website that works front-end and back-end.</p>
                            <Link to="/Project-1" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <img src={project1} class="card-img-top bg-image" alt="..." />
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Inventory Management</h5>
                            <p class="card-text">This Project is a fully functional and responsive online shopping website that works front-end and back-end.</p>
                            <Link to="/Project-2" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <div>
                            <img src={project3} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Online Fitness Trainer</h5>
                            <p class="card-text">This Project is responsive personal service provider website that works front-end and with login</p>
                            <Link to="/Project-3" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <div>
                            <img src={project4} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Penguin Fashion</h5>
                            <p class="card-text">This Project is responsive bootstripe and react E-commerce website that works front-end</p>
                            <div className='d-flex justify-content-between'>
                            <a class="btn btn-outline-info my-3" target="_blank" rel='noreferrer' href="https://nike-react-bootstarp.netlify.app/">Live Site</a>
                            <a class="btn btn-outline-info my-3" target="_blank" rel='noreferrer' href="https://nike-react-bootstarp.netlify.app/">Git Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <div>
                            <img src={project5} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Premier Convention Center</h5>
                            <p class="card-text">This Project is responsive bootstripe Convention Center website that works front-end</p>
                            <a class="btn btn-outline-info my-3" target="_blank" rel='noreferrer' href="https://premier-convention-center.netlify.app/">Live Site</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card">
                        <div>
                            <img src={project6} class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Panda Ecommerce-</h5>
                            <p class="card-text">This Project is responsive bootstripe Ecommerce that works front-end</p>
                            <a class="btn btn-outline-info my-3" target="_blank" rel='noreferrer' href="https://panda-ecommerce-bootstripe.netlify.app/">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;