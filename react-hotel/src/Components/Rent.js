import React, { useContext } from 'react';
import { RoomContext } from '../contexts/roomsContext';
import Form from './Form';

export default function Rent() {

    const {rooms, setRooms} = useContext(RoomContext); //fixed by exporting the context properly 
    console.log(RoomContext)

    const rentRoom = (e) => {
        console.log('You are trying to rent a room')

    }

    //filter first then map over below!
    //conditional inside map func or filter before map over. if room.renter = null then return list item else return null 
    // if (room.renter === null) {
    //     return (<li key={rooms.renter}>{rooms.room}</li>)
    // } else {
    //     return null
    // }

    // room.renter == null ? <li key={rooms.renter}>{rooms.rooms}</li> : null

    return (
        <div className='rent-list'>
            <h1>renting here</h1>
            <Form />
            <ul>
                {rooms.map(room => {
                    return (<li key={rooms.renter}>{rooms.room}</li>)
                })}
            </ul>
            <button onClick={rentRoom} type='submit'>Express Book</button> 
        </div>
    )
}
