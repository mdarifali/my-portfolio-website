import React from 'react';
import Arif from '../Assets/Arif_Ali_Profile.jpg';

const AboutMe = () => {
    return (
        <div className='container my-5'>
            <div class="card mb-3">
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <img src={Arif} class="w-75 rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h1 class="mb-3">About Me</h1>
                            <p class="card-text">I am a full-stack developer with extensive experience in both front-end and back-end technologies. I'm familiar with the latest JavaScript code, style & conventions and always keep up to date with React.js new API and I prefer working with Invision or similar apps to create pixel-perfect UI with Reactjs React.</p>
                            <p class="card-text">I have built web applications using the latest state-of-the-art technologies: React, Node.js, and technologies. I develop simpler but more powerful and modern container-based.</p>
                            <h5 className='my-4'>Working With:</h5>
                                <p>Client Technologies: React JS, JavaScript, ES6, Tailwind CSS, Bootstrap CSS, Psd to Html, Figma</p>
                                <p>Server Technologies: Node JS, Express JS</p>
                                <p>Database Technologies: MongoDB, Firebase, MySql</p>
                            <button className='btn btn-outline-warning btn-lg mt-5'>Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;