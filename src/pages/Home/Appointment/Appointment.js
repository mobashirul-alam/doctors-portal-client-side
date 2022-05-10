import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <div
            style={{ backgroundImage: `url(${appointment})` }}
            className="card lg:card-side bg-base-100 shadow-xl rounded-none  bg-cover bg-no-repeat my-28 grid grid-cols-1 md:grid-cols-2 overflow-visible">
            <figure className='mt-[-150px] hidden md:visible'>
                <img src={doctor} alt="Album" />
            </figure>
            <div className="card-body text-white max-w-lg my-auto">
                <p className='font-bold text-xl mb-5 text-secondary'>Appointment</p>
                <h2 className="card-title font-semibold text-4xl">Make an appointment Today</h2>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <div className="card-actions justify-start">
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Appointment;