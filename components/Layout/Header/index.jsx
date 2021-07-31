import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const Header = (props) => {
    return (
        <div className="bg-purple">
            <header className="max-w-xl mx-auto flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckDouble} className="text-6xl text-white p-2" />
                <span icon={faCheckDouble} className="text-6xl text-white  p-2 font-title">
                    TODO
                </span>
            </header>
        </div>
    );
};

export default Header;
