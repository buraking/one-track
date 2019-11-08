import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isFaceBookSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : isFaceBookSignIn ? 'facebook-sign-in': ''} custom-button`}
    {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;