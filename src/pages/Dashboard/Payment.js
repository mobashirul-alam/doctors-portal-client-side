import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const url = `https://doctors-portal-mobashirul-alam.herokuapp.com/booking/${id}`;

    const stripePromise = loadStripe('pk_test_51L22aADQxW8v9t3tnTi8TyDxeWYPyw6Vwk2DjNHSDHfxFctukJlvuT1IEKds5SLwgXKbwAW1eFR5GWpwFxkVVbSF00ZOJHbMHy');

    const { data: appointment, isLoading } = useQuery(['appointment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-8">
                <div class="card-body">
                    <h1 className='text-primary font-bold text-xl'>Hello, {appointment.patientName}</h1>
                    <h2 class="card-title">Please pay for {appointment.treatment}</h2>
                    <p>
                        Your appointment : <br />
                        <span className='text-orange-700'> {appointment.date}</span> at
                        <span> {appointment.slot}</span>
                    </p>
                    <p>Please Pay : ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;