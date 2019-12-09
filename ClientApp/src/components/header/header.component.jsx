import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <Link className='option' to='/form-event'>OPRET NYT EVENT</Link>
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
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                <Link className='option' to='/signin'>SIGN IN</Link>        
            )}
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);