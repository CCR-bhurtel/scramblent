import React from 'react';
import Logo from '../../Logo';

function Navbar() {
    return (
        <div className="w-100 flex items-center justify-start">
            <div className="logoContainer ml-[1.5rem] mt-[1.5rem]">
                <Logo />
            </div>
        </div>
    );
}

export default Navbar;
