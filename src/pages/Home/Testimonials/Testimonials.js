import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: people3,
            location: 'California'
        }
    ];

    return (
        <section className='px-14'>
            <div className='flex justify-between mb-8 md:mb-12 lg:mb-20'>
                <div>
                    <h4 className='text-xl font-bold text-secondary'>Testimonial</h4>
                    <p className='text-4xl text-accent'>What Our Patients Say</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-14'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;