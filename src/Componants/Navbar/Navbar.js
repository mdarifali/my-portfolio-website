import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineContactMail } from 'react-icons/md';
import { SiMicrodotblog } from 'react-icons/si';
import { Link } from 'react-router-dom';
import NightMode from '../NightMode';

const Navbar = () => {

    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom border-2 border-info">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <NightMode />
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav m-auto p-2">
                            <Link class="nav-link active text-info me-5" 
                                aria-current="page"
                                to="/">
                                <AiOutlineHome className='fs-1'
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Home"
                                />
                            </Link>
                            <a class="nav-link text-info me-5" href="#about">
                                <AiOutlineUser className='fs-1' 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="About Me"
                                />

                            </a>
                            <a class="nav-link text-info me-5" href="#project">
                                <AiOutlineFundProjectionScreen className='fs-1' 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="My Project"
                                />
                            </a>
                            <a class="nav-link text-info me-5" href="#contact">
                                <MdOutlineContactMail className='fs-1' 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Contact Me"
                                />
                            </a>
                            <Link class="nav-link text-info me-5" to="/blog">
                                <SiMicrodotblog className='fs-1' 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Blog"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;