import React from 'react';
import project1 from '../Assets/website-images/project-1.png';
import project2 from '../Assets/website-images/project-2.png';
import project3 from '../Assets/website-images/project-3.png';
import { Link } from 'react-router-dom';

const Project = () => {

    return (
        <div className='container py-5' id='project'>
            <h1 className='text-center text-white my-5'>My Latest Project</h1>
            <div className="row g-5">
                <div className="col-md-4">
                    <div class="card">
                        <img src={project2} class="card-img-top" alt="..." />
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Tools Manufacturer Website</h5>
                            <p class="card-text">This Project is a fully functional and responsive wholesale online shopping website that works front-end and back-end.</p>
                            <Link to="/" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={project1} class="card-img-top" alt="..." />
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Inventory Management</h5>
                            <p class="card-text">This Project is a fully functional and responsive online shopping website that works front-end and back-end.</p>
                            <Link to="/" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={project3} class="card-img-top" alt="..." />
                        <div class="card-body bg-dark text-white">
                            <h5 class="card-title">Online Fitness Trainer</h5>
                            <p class="card-text">This Project is responsive personal service provider website that works front-end and with login</p>
                            <Link to="/" class="btn btn-outline-info my-3">See More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;