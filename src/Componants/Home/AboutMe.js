import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Arif from '../Assets/Arif_Ali_Profile.jpg';

const AboutMe = () => {
    return (
        <div className='container py-5' id='about'>
            <div class="bg-dark text-white">
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <div className=''>
                            <img src={Arif} class="img-fluid rounded" alt="..." />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h1 class="mb-3">About Me</h1>
                            <p class="card-text">I am a full-stack developer with extensive experience in both front-end and back-end technologies.
                                I'm familiar with the latest JavaScript code, style & conventions and always keep up to date with React.js new API and I prefer working with Invision or similar apps to create pixel-perfect UI with Reactjs React.</p>
                            <div className=' mt-4'>
                                <Link to='#'><AiOutlineFacebook className='fs-1 text-info' /></Link>
                                <Link to='#'><AiOutlineLinkedin className='fs-1 text-info' /></Link>
                                <Link to='#'><AiOutlineGithub className='fs-1 text-info' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;