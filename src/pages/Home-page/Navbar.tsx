import React from 'react';

function Navbar() {
    return(
        <nav className="navbar bg-nav navbar-expand-sm fixed-top navbar-light bg-dark bg-opacity-25">
        <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5">
                <a className="nav-link mx-2 text-white" aria-current="page" href="#home">Home</a>
                <a className="nav-link mx-2 text-white" href="#aboutme">About me</a>
                <a className="nav-link mx-2 text-white" href="#skills">Skills</a>
                <a className="nav-link mx-2 text-white" href="#work">My works</a>
            </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;