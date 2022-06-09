import React from 'react';
import banner from '../Images/New Project.png';
import img from '../Images/Arif_Ali_Protfolio-1.png';
import Resume from '../Images/Md. Arif Ali Resume.pdf';


const Banner = () => {

    return (
        <div className='container-fluid'>
            <div className="row bg-secondary justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className='float-end text-light' style={{width: '350px'}}>
                        <span>Hello</span>
                        <h1 className='fw-bolder text-warning mb-0'>I'm Arif Ali</h1>
                        <h2 className='mt-0 mb-3'>Frontend Developer</h2>
                        <a href={Resume} class="btn btn-outline-warning btn-lg"  download="My_File.pdf">Download Resume</a>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img} className='w-75' alt="#" />
                </div>
            </div>
        </div>
    );
};

export default Banner;