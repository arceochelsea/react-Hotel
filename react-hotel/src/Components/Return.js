import React, { useContext } from 'react';
import { RoomContext } from '../contexts/roomsContext';
import Form from './Form';

export default function Return() {

    const {rooms, setRooms} = useContext(RoomContext);
    console.log(rooms);
    const flatArr = rooms.flat(); 
    console.log(flatArr)

    const checkIn = () => {
        window.location.href = '/rent'
    }

    const homeBtn = () => {
        window.location.href = '/'
    }

    const returnRoom = (e) => {
        //console.log('You are trying to return a room');
        const guestName = document.getElementById('guestName').value.toLowerCase().trim()
        console.log(guestName);
        const newFlatArr = [...flatArr] 

        for (let i = 0; i < newFlatArr.length; i++) {
            console.log(document.getElementById('roomNum').value);
            if (newFlatArr[i].room === document.getElementById('roomNum').value) {
                if (newFlatArr[i].renter === guestName ) {
                    newFlatArr[i].renter = null;
                    setRooms(newFlatArr)
            } 
            } 
        }
    }

    return (
        <div className='return-list'>
            <h1>Return Room(s) Here</h1>
            <h5>please provide guest name and room number</h5>
            <Form />
            <input id='roomNum' type='number' placeholder='Room Number'></input>
            <ul>
            {flatArr.map(room => {
                    if (room.renter !== null) {
                        return <li key={room.room}>{room.room} ${room.price}</li>
                    }
            })}    
            </ul>
            <button onClick={returnRoom} type='submit'>Express Checkout</button>
            <button text='Rent A Room!' onClick={checkIn}>Rent</button> 
            <button text='Home!' onClick={homeBtn}>Home</button>   
        </div>
    )
}
