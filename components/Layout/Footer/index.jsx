import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeLogoFull, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    return (
        <div className="bg-purple space-x-1 text-center text-white flex items-center justify-center">
            Made With
            <FontAwesomeIcon icon={faHeart} className="text-4xl text-red p-1 hover:text-white " />
            by
            <a href={'https://www.instagram.com/mahticode'}>
                {' '}
                <u>Mahdi Farahani</u>{' '}
            </a>
        </div>
    );
}

export default Footer;
