import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div className="card lg:max-w-lg shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-2xl text-secondary">{service.name}</h2>
                <p>
                    {
                        service.slots.length < 1
                            ? <span className='text-red-500'>Please Try Another Day</span>
                            : <span>{service.slots[0]}</span>
                    }
                </p>
                <p className='font-normal text-sm'>
                    {service.slots.length} {service.slots.length <= 1 ? 'space' : 'spaces'} available
                </p>
                <div className="card-actions justify-center">
                    {/* <button

                        className="btn btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">
                        Book Appointment
                    </button> */}
                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={service.slots.length === 0}
                        className="btn modal-button text-white uppercase bg-gradient-to-r from-secondary to-primary">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;