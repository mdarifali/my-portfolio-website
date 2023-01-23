import React from 'react';
import CertificateImage from '../Assets/Certificate_Programing Hero.JPG'

const Achievement = () => {
    return (
        <div className="container py-5">
             <h1 className='text-center text-white my-5'>My Achievement</h1>
            <div class="card" data-aos="flip-left" >
                <img src={CertificateImage} class=" p-4" alt="..." />
            </div>
        </div>
    );
};

export default Achievement;