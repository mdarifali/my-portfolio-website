import React from 'react';
import './style.css';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { RiCodeBoxLine } from 'react-icons/ri';
import { TbVirusSearch, TbHeartRateMonitor, TbBrandCodesandbox } from 'react-icons/tb';

const Services = () => {

    return (
        <div className='container py-5'>
            <h1 className='text-center text-white mb-5'>My Service</h1>
            <div className="row g-5">
                <div className="col-md-4" data-aos="flip-down">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <AiOutlineHtml5 className='text-info fs-1 my-3' />
                            <h4 class="card-title">Website Design</h4>
                            <p class="card-text">HTML5, CSS3, ES6, JavaScript, TypeScript, Bootstrap, Tailwind...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-down">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <FiMonitor className='text-info fs-1 my-3' />
                            <h4 class="card-title">Website Development</h4>
                            <p class="card-text">React JS, React Router, React Form,
                                React Hook, Rest API...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-down">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <TbVirusSearch className='text-info fs-1 my-3' />
                            <h4 class="card-title">Website Bugfix</h4>
                            <p class="card-text">Debugging, API Data, Responsive, Login, Singup</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <TbHeartRateMonitor className='text-info fs-1 my-3' />
                            <h4 class="card-title">Frontend Handle</h4>
                            <p class="card-text">HTML5, CSS3, ES6, JavaScript, TypeScript, Bootstrap, Tailwind, React JS, React Router,
                                React Hook, Rest API.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <RiCodeBoxLine className='text-info fs-1 my-3' />
                            <h4 class="card-title">Backend Handle</h4>
                            <p class="card-text">MongoDB, Node JS, Express JS, Firebase, MySql</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" data-aos="flip-up">
                    <div class="card shadow p-5 card-bg">
                        <div class="card-body text-white">
                            <TbBrandCodesandbox className='text-info fs-1 my-3' />
                            <h4 class="card-title">Website Application</h4>
                            <p class="card-text">Full-Ecommerce, Admin Dashboard, Payment System, JWT...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;