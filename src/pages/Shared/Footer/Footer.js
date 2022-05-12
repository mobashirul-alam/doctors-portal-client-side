import React from 'react';
import logo from '../../../assets/images/whitening.png';
import footer from '../../../assets/images/footer.png';
import { Link } from 'react-router-dom';

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
                    <Link to="" className="link link-hover">Branding</Link>
                    <Link to="" className="link link-hover">Design</Link>
                    <Link to="" className="link link-hover">Marketing</Link>
                    <Link to="" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="" className="link link-hover">About us</Link>
                    <Link to="" className="link link-hover">Contact</Link>
                    <Link to="" className="link link-hover">Jobs</Link>
                    <Link to="" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="" className="link link-hover">Terms of use</Link>
                    <Link to="" className="link link-hover">Privacy policy</Link>
                    <Link to="" className="link link-hover">Cookie policy</Link>
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