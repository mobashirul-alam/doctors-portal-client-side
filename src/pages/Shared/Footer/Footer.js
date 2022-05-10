import React from 'react';
import logo from '../../../assets/images/whitening.png';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{
            backgroundImage: `url(${footer})`
        }}
            className="p-10 text-base-content bg-cover bg-no-repeat">
            <div className='footer'>
                <div className='text-center'>
                    <img className='mx-auto' src={logo} alt="" />
                    <p className='text-secondary text-base font-medium'>
                        Doctors Portal
                        <br />
                        Providing reliable service since 2002
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center mt-6 '>
                <p>
                    Copyright © {year} - All right reserved by Doctors Portal
                </p>
            </div>
        </footer>
    );
};

export default Footer;