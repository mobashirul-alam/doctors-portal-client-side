import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='my-4 lg:my-8'>{review.description}</p>
                <div className='flex justify-start'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary mr-4">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='my-auto'>
                        <h3 className='font-semibold text-xl text-accent'>{review.name}</h3>
                        <p className='font-medium text-base'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;