import React from 'react';
import chair from '../../../assets/images/chair.png'
import bgImg from '../../../assets/images/bg.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className='hero min-h-screen bg-cover h-full bg-no-repeat'>
            <div
                className="hero-content flex-col lg:flex-row-reverse px-12 ">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl ml-6" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Taking care of your teeth is one thing, enjoying your care is everything.We're Ready to Serve You with our best!!!
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;