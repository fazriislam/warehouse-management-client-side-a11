import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer style={{heifht:'150px'}} className='bg-dark text-center mt-5 p-3'>
            <p className='text-white'><small>Copyright <FontAwesomeIcon icon={faCopyright} /> {year}</small></p>
            <p className='text-danger'><small>Bunch of Goods</small></p>
        </footer>
    );
};

export default Footer;