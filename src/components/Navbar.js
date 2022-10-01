import React from 'react';
import ThemeToggle from './ThemeToggle';
import PokeLogo from '../assets/pokelogo.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full py-4 px-2 border-b shadow-md shadow-black">
            <div>
                <img src={PokeLogo} alt="" className="w-20" />
            </div>
            <div>
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;
