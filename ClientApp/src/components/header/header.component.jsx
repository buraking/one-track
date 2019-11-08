import React from 'react';
import { Link } from 'react-router-dom';

//import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-containter' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/concert-list'>
                KONCERTER
            </Link>
            <Link className='option' to='/Profile'>
                 PROFIL
            </Link>
            <Link className='option' to='/signin'>
                 SIGN UP
            </Link>
        </div>
    </div>
);
export default Header;