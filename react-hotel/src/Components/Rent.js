import React, { useContext } from 'react';
import RoomContext from '../contexts/roomsContext';
import Form from './Form';

export default function Rent() {

    const {rooms} = useContext(RoomContext); // undefined???
    console.log(rooms)

    //this wont work yet cause of above?!?!?!
    //who knows, not I 

    const rentRoom = (e) => {
        console.log('You are trying to rent a room')
    }


    return (
        <div className='rent-list'>
            <h1>renting here</h1>
            <Form />
            <ul>
                {rooms.map(room => {
                    return (<li key={rooms.renter}>{rooms.room}</li>)
                })}
            </ul>
            <button onClick={rentRoom}type='submit'>Express Book</button> 
        </div>
    )
}
