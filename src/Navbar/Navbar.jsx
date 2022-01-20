import React from 'react'
import Button from './Button';

const Navbar = () => {
    const links = ['home', 'about', 'gallery'];

    return (
        <div>
            <ul className=' bg-red-800 inline-flex'>
            {links.map((link) => (
                <li><Button page={link} /></li>
            ))}
            </ul>
        </div>
    )
}

export default Navbar
