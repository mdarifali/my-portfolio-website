import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import Arif from '../Assets/Arif_Ali_Profile.jpg';
import './style.css';


const AboutMe = () => {
    return (
        <div className='container py-5' id='about'>
            <div class="bg-dark text-white">
                <div class="row g-5 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <div data-aos="zoom-in">
                            <img src={Arif} class="w-100 rounded" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6" data-aos="flip-left">
                        <div className="card" style={{ "backgroundColor": '#4B5D67' }}>
                            <div class="card-body p-5 text-center">
                                <h1 class="mb-3">About Me</h1>
                                <p class="card-text text-start">I am a full-stack developer with extensive experience in both front-end and back-end technologies.
                                    I'm familiar with the latest JavaScript code, style & conventions and always keep up to date with React.js new API and I prefer working with Invision or similar apps to create pixel-perfect UI with React.</p>
                                <div className='mt-4'>
                                    <a href='https://www.facebook.com/arip.ali.98' target="_blank" ><MdFacebook className='fs-1 text-warning me-2'/></a>
                                    <a href='https://www.linkedin.com/in/arif-ali-92a8b2229/' target="_blank" ><AiOutlineLinkedin className='fs-1 text-warning me-2'/></a>
                                    <a href='https://github.com/mdarifali' target="_blank"><AiOutlineGithub className='fs-1 text-warning'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;