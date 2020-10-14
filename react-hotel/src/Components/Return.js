import React, { useContext } from 'react';
import { RoomContext } from '../contexts/roomsContext';
import Form from './Form';

export default function Return() {

    const {rooms} = useContext(RoomContext);
    console.log(rooms);

    const returnRoom = (e) => {
        console.log('You are trying to return a room');
    }

    return (
        <div className='return-list'>
            <h1>returning here</h1>
            <Form />
            <ul>
                <li></li>
            </ul>
            <button onClick={returnRoom} type='submit'>Express Checkout</button>
        </div>
    )
}
