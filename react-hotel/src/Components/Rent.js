import React, { useContext } from 'react';
import { RoomContext } from '../contexts/roomsContext';
import Form from './Form';

export default function Rent() {

    const {rooms, setRooms} = useContext(RoomContext);
    console.log(RoomContext)
    const flatArr = rooms.flat(); 
    console.log(flatArr)

    const checkOut = () => {
        window.location.href = '/return'
    }

    const rentRoom = (e) => {
        console.log('You are trying to rent a room')
        const guestName = document.getElementById('guestName').value.toLowerCase().trim()
        console.log(guestName);
        const newFlatArr = [...flatArr] 

        let i = 0;
        for (let i = 0; i < newFlatArr.length; i++) {
            if (newFlatArr[i].renter === null) {
                newFlatArr[i].renter = guestName;
                setRooms(newFlatArr)
                break 
            }
        }
    }

    //filter first then map over below!
    //conditional inside map func or filter before map over. if room.renter = null then return list item else return null 
    // if (room.renter !== null) {
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
            {flatArr.map(room => {
                    if (room.renter === null) {
                        return <li key={room.room}>{room.room} ${room.price}</li>
                    }
            })}    
            </ul>
            <button onClick={rentRoom} type='submit'>Express Book</button> 
            <button text='Return A Room!' onClick={checkOut}>Return</button>
        </div>
    )
}