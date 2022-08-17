import React from 'react';

const Footer = () => {
    let date=new Date();
    return (
        <div class="bg-dark p-4">
            <p class="text-white text-capitalize text-center">created by <span class="text-primary">mostafa hossam </span>| All right reserved &copy; {date.getFullYear()}</p>
        </div>
    );
}

export default Footer;
