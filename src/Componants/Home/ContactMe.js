import React from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const ContactMe = () => {
    return (
        <section className="container shadow-lg rounded-3 my-5">
            <div className="row g-3 d-flex justify-content-center align-items-center p-5">
                <div className="section-header">
                    <h1 className="text-center mb-5">Contact Me</h1>
                </div>
                <div className="col-md-4 text-center">
                    <FiMapPin className='text-warning fs-1 mb-3'/>
                    <h3>Address</h3>
                    <p>Badda Link-Road, Dhaka-1212, Bangladesh</p>
                </div>
                <div className="col-md-4 text-center">
                    <FiPhone className='text-warning fs-1 mb-3'/>
                    <h3>Phone</h3>
                    <p>+88 01729-123784</p>
                </div>
                <div className="col-md-4 text-center">
                    <HiOutlineMail className='text-warning fs-1 mb-3'/>
                    <h3>Email</h3>
                    <p>mdarifali.dev@gmail.com</p>
                </div>
            </div>
            <form className="my-5 p-5">
                <div className="row">
                    <div className="form-group col-md-6 mb-4">
                        <input type="text" name="name" className="form-control input-field" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-md-6 mb-4">
                        <input type="email" name="email" className="form-control form-group col-md-6" id="name" placeholder="Your Email" required />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mb-4">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-danger my-4" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactMe;