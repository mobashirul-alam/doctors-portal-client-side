import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }}
            className='text-center mt-28 py-12 bg-accent bg-cover'>
            <h3 className='font-bold text-xl text-secondary'>Contact Us</h3>
            <p className='text-4xl text-white mb-10'>Stay Connected With Us</p>
            <div className="form-control max-w-md mx-auto">
                <input type="text" placeholder="Email Address" className="input input-bordered mb-5" />
                <input type="text" placeholder="Subject" className="input input-bordered mb-5" />
                <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                <input className='btn w-1/4 text-white font-bold mx-auto bg-gradient-to-r from-secondary to-primary mt-8' type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default ContactUs;