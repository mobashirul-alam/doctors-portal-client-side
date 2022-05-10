import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';
import ServicesBanner from '../ServicesBanner/ServicesBanner';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities."
        },
        {
            _id: 2,
            name: "Cavity Filling",
            img: cavity,
            description: "To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed."
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            img: whitening,
            description: "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches. These bleaches break stains into smaller pieces, which makes the color less concentrated and your teeth brighter."
        }
    ]
    return (
        <div className='mt-28'>
            <p className='font-bold text-xl text-secondary text-center mb-2'>OUR SERVICES</p>
            <p className='text-4xl text-center text-accent'>Services We Provide</p>
            <div className='px-12 my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <ServicesBanner></ServicesBanner>
        </div>
    );
};

export default Services;