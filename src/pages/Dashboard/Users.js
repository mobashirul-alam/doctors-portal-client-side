import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const { isLoading, data: users, refetch } = useQuery('users', () => fetch(`https://doctors-portal-mobashirul-alam.herokuapp.com/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-3/4'>
            <h1 className='text-3xl mb-2 text-center'>All users : {users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;