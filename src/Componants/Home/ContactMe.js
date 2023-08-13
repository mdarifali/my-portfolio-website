import React, { useRef } from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_iwxa9la', 'template_54r22kl', form.current, 'Jy74bKaJwz2n3q7Cr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

    }

    return (
        <div className="container py-5" id='contact' >
            <div className="row g-5 text-white text-center align-items-center">
                <h1 className='text-center mb-5'>Hire Me.</h1>
                <div className="col-md-4" data-aos="fade-right">
                    <div className="d-block justify-content-center">
                        <FiMapPin className='text-info fs-1 mb-3' />
                        <p>Badda Link-Road, <br/> Dhaka-1212, Bangladesh</p>
                    </div>
                    <div className="">
                        <FiPhone className='text-info fs-1 mb-3' />
                        <p>+88 01729-123784</p>
                    </div>
                    <div className="">
                        <HiOutlineMail className='text-info fs-1 mb-3' />
                        <p>mdarifali.dev@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row g-3">
                        <div className="col-md-8 m-auto">
                            <form onSubmit={handleSubmit} ref={form}>
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
                                    <button className="btn btn-outline-info" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;