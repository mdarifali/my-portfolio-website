import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link active text-info me-3" 
                                aria-current="page"
                                to="/">
                                <AiOutlineHome className='fs-2' />
                            </Link>
                            <a class="nav-link text-info me-3" href="#about">
                                <AiOutlineUser className='fs-2' />

                            </a>
                            <a class="nav-link text-info me-3" href="#project">
                                <AiOutlineFundProjectionScreen className='fs-2' />
                            </a>
                            <a class="nav-link text-info me-3" href="#contact">
                                <MdOutlineContactMail className='fs-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;