import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-containter' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            {
                currentUser ?
                <Link className='option' to='/submit-event'>OPRET NYT EVENT</Link>
                :
                <Link className='option' to='/signin'></Link>
            }
            {
                currentUser ?
                <Link className='option' to='/Profile'>PROFIL</Link>
                :
                <Link className='option' to='/signin'></Link>
            }
            <Link className='option' to='/concert-list'>
                KONCERTER
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);
export default Header;