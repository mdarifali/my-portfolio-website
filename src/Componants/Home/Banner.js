import React from 'react';
import './style.css';
import img from '../Assets/Arif_Ali_Protfolio-1.png';
import Resume from '../Assets/Md. Arif Ali Resume.pdf';


const Banner = () => {

    return (
        <div className='container-fluid' style={{ backgroundColor: '#191919' }}>
            <div className="row g-3 align-items-center mb-5">
                <div className="col-md-6 order-md-1 order-2 p-4" data-aos="fade-right">
                    <div className='float-end text-light' style={{ width: '350px' }}>
                        <div>
                            <span className='fs-5'>Hello</span>
                            <h1 className='fw-bolder text-info mb-0'>I'm Arif Ali</h1>
                            <h2 className='mb-0'>Frontend Developer</h2>
                        </div>
                        <a href={Resume} class="btn btn-outline-info btn-lg my-4" download="My_Resume.pdf">Download Resume</a>
                    </div>
                </div>
                <div className="col-md-6 text-center position-relative order-md-2 order-1">
                    <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='img-bg'></div>
                        <img src={img} className='position-relative w-75' alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;