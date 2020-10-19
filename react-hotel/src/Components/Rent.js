import React, { useContext } from 'react';
import { RoomContext } from '../contexts/roomsContext';
import Form from './Form';

export default function Rent() {

    const {rooms, setRooms} = useContext(RoomContext);
    console.log(RoomContext)
    const flatArr = rooms.flat(); 
    console.log(flatArr)

    const returnBtn = () => {
        window.location.href = '/return'
    }

    const homeBtn = () => {
        window.location.href = '/'
    }

    const rentRoom = (e) => {
        const guestName = document.getElementById('guestName').value.toLowerCase().trim()
        console.log(guestName);
        const newFlatArr = [...flatArr] 

        let i = 0;
        for (let i = 0; i < newFlatArr.length; i++) {
            if (newFlatArr[i].renter === null) {
                newFlatArr[i].renter = guestName;
                setRooms(newFlatArr)
                document.getElementById('guestName').value = '';
                break 
            }
        }
    }

    return (
        <div className='rent-list'>
            <h1>Rent Room(s) Here</h1>
            <h5>please enter your name below to rent next available room</h5>
            <Form />
            <ul>
            {flatArr.map(room => {
                    if (room.renter === null) {
                        return <li key={room.room}>Room: {room.room}  ${room.price}</li>
                    }
            })}    
            </ul>
            <button onClick={rentRoom} type='submit'>Express Book</button> 
            <button text='Return A Room!' onClick={returnBtn}>Return</button>
            <button text='Home!' onClick={homeBtn}>Home</button>
        </div>
    )
}
