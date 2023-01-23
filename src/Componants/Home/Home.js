import React from 'react';
import AboutMe from './AboutMe';
import Achievement from './Achievement';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Project from './Project';
import Services from './Services';

const Home = () => {
    
    return (
        <div className=''>
            <Banner />
            <Project />
            <Services />
            <Achievement />
            <AboutMe />
            <ContactMe />
        </div>
    );
};

export default Home;