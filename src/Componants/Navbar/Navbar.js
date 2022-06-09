import React from 'react';

const Navbar = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">About</a>
                            <a class="nav-link" href="#">My Projects</a>
                            <a class="nav-link" href="#">Contact Me</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;