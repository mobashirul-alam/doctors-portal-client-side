import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='px-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <InfoCard
                cardTitle='Opening Hours'
                cardText='We are open from 8.00 am to 11.59 pm.'
                bgClass='bg-gradient-to-r from-secondary to-primary'
                img={clock}></InfoCard>
            <InfoCard
                cardTitle='Visit our location'
                cardText='Brooklyn, NY 10036, United States'
                bgClass='bg-accent'
                img={marker}></InfoCard>
            <InfoCard
                cardTitle='Contact us now'
                cardText='+000 123 456789'
                bgClass='bg-gradient-to-r from-secondary to-primary'
                img={phone}></InfoCard>
        </div>
    );
};

export default Info;