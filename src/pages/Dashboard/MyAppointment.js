import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [appointments, setAppointments] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    };
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments?.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.treatment}</td>
                            <td>{a.slot}</td>
                            <td>{a.date}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;