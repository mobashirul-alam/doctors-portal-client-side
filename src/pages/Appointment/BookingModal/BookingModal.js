import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, price } = treatment;

    const formattedDate = format(date, 'PP')

    const handleSubmitBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        };

        fetch('https://doctors-portal-mobashirul-alam.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // to close the modal
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                };
                refetch();
                setTreatment(null);
            })

    }
    return (
        <div>
            <input key={_id} type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-xl mb-4 text-secondary">
                        Book for : {name}
                    </h3>
                    <form onSubmit={handleSubmitBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input
                            type="text"
                            name='name'
                            disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            name='email'
                            disabled value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            type="text"
                            name='phone'
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs" />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;