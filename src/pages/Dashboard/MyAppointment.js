import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [appointments, setAppointments] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://doctors-portal-mobashirul-alam.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setAppointments(data)
            })
    }, [user, navigate]);

    if (loading) {
        return <Loading></Loading>
    };
    return (
        <div class="w-11/12 overflow-x-auto">
            <h1 className='text-center text-2xl mb-3'>My Appointments</h1>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments?.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <span className='text-success font-bold'>Paid</span>
                                    <p>Transaction Id: <span className='text-orange-500'>{a.transactionId}</span></p>
                                </div>}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;