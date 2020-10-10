import React, {useState, createContext, useEffect} from 'react'
import { bookARoom } from '../utils/roomAlgorithm';
import { get, set } from '../utils/localStorage';

const RoomContext = createContext();

export default function RoomContextProvider(props) {

    const [rooms, setRooms] = useState(() => {
        return get('rooms', bookARoom(4, 4))
    })

    useEffect( () => {
        set('rooms', JSON.stringify(rooms))
    }, [rooms])

    return (
        <RoomContext.Provider value={{rooms: rooms, setRooms: setRooms}}>
        {props.children}
        </RoomContext.Provider>
    )
}