import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../assets/counter/UserReducer';

function Users() {
    const users = useSelector((state) => state.UserReducer.users?.[0]?.users || []);
    const dispatch= useDispatch();
    const deleteHandler= (index)=>{
        dispatch(deleteUser(index));
       
    }

    return (
        <div className='h-screen w-[50%] absolute left-[15%] p-4  '>
            <h1 className='mb-5 text-2xl text-blue-400 font-semibold '>Users</h1>
            <ul className='grid grid-flow-col grid-rows-6 gap-6'>
                {users.map((user, index) => (
                    <li key={index} className='px-3 w-52 bg-red-200  py-3 align-middle flex justify-between text-center'>
                        <h2> {user.firstName}</h2>
                        <button onClick={()=>{deleteHandler(index)}} className=' w-16 py-1 px-3 text-center  rounded-sm bg-blue-400'>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
