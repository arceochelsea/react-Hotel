import React from 'react'

export default function NavBar() {

    const checkIn = () => {
        console.log('you are now checking in')
        window.location.href = '/rent'
    }

    const checkOut = () => {
        console.log('you are now checking out')
        window.location.href = '/return'
    }

    return (
        <div>
        <h1>Welcome to the Career Devs Hotel!</h1>
        <h4>if ya know whats good for ya dont stay</h4>
        <button text='Rent A Room!' onClick={checkIn}>Rent</button>  
        <button text='Return A Room!' onClick={checkOut}>Return</button>
        </div>
    )
}
