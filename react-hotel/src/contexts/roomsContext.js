import React, {useState, createContext, useEffect} from 'react'
import { bookedRooms } from '../utils/roomAlgorithm';
import { set } from '../utils/localStorage';

export const RoomContext = createContext();

export default function RoomContextProvider(props) {

    const localStorageRoom = localStorage.getItem('rooms')
    const initalState = localStorageRoom !== null ? JSON.parse(localStorageRoom) : bookedRooms(4, 4)
    const [rooms, setRooms] = useState(initalState) 

    useEffect( () => {
        set('rooms', JSON.stringify(rooms))
    }, [rooms])

    return (
        <RoomContext.Provider value={{rooms: rooms, setRooms: setRooms}}>
        {props.children}
        </RoomContext.Provider>
    )
}