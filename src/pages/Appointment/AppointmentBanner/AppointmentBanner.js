
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ background: `url(${bgChair})` }}
            className="hero min-h-screen bg-cover ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='Dental Chair' />
                <div className='mr-28'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;