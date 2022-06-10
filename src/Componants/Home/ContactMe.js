import React from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const ContactMe = () => {
    return (
        <div className="container py-5" id='contact'>
            <div className="row text-white text-center align-items-center">
                <h1 className='text-center mb-5'>Hire Me.</h1>
                <div className="col-md-4">
                    <FiMapPin className='text-info fs-1 mb-3' />
                    <h3>Address</h3>
                    <p>Badda Link-Road, Dhaka-1212, Bangladesh</p>
                </div>
                <div className="col-md-4">
                    <FiPhone className='text-info fs-1 mb-3' />
                    <h3>Phone</h3>
                    <p>+88 01729-123784</p>
                </div>
                <div className="col-md-4">
                    <HiOutlineMail className='text-info fs-1 mb-3' />
                    <h3>Email</h3>
                    <p>mdarifali.dev@gmail.com</p>
                </div>
                <div className="row g-3 justify-content-center align-items-center mt-5">
                    <div className="col-md-8 m-auto">
                        <form className=''>
                            <div className="row">
                                <div className="form-group col-md-6 mb-4">
                                    <input type="text" name="name" className="form-control bg-transparent text-white" placeholder="Your Name" required />
                                </div>
                                <div className="form-group col-md-6 mb-4">
                                    <input type="email" name="email" className="form-control bg-transparent text-white" placeholder="Your Email" required />
                                </div>
                                <div className="form-group mb-4">
                                    <input type="text" className="form-control bg-transparent text-white" name="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mb-4">
                                    <textarea className="form-control bg-transparent text-white" name="message" rows="5" placeholder="Message" required=""></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-outline-info my-4" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;