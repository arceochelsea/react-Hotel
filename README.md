React Hotel Application


Intermediate Final Project: React Hotel


Overview;
	This React Front-end will show an accurate display of available rooms at the CareerDevs Hotel. There will be a total of sixteen available rooms at the CD Hotel. Four for each of the four floors. Your goal is to create an interface for renting and returning a room at the CD Hotel. The application should be set up to display different components. One will be a viewing component to rent, and another to return. The app needs to include a navigation bar with two buttons to display to the user to the aforementioned components. 


Data; 
	The hotel room data needs to be stored in state and localStorage. This is so the whole app can have read/set access to the data, make sure you create a roomsContext hook and provide that context to the whole application. Use that context in functional components when the data needs to be read or set. The room's information needs to be stored in both a context and localStorage as a two dimensional array, where each nested element is an object. 
Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]
*triple dots represent room data that would be there
As you can see from above each sub array will represent a floor (four total), and each floor will have four rooms. Each room will be represented as an object with room (room number), renter (who is renting currently), and price (in dollars) properties. Note that a room not being rented should have a renter value of null. This will be used to represent a room not being rented.
When your application is first used the data should not be hard-coded, but should be produced programmatically. 

Room prices equation; Price = 
( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155
Room 301 = ( 50*3 ) + ( 10*1 - 10 ) + 45 = $195



Your output should be:
[
  [
	{ room: '101', renter: null, price: 95 },
	{ room: '102', renter: null, price: 105 },
	{ room: '103', renter: null, price: 115 },
	{ room: '104', renter: null, price: 125 }
  ],
  [
	{ room: '201', renter: null, price: 145 },
	{ room: '202', renter: null, price: 155 },
	{ room: '203', renter: null, price: 165 },
	{ room: '204', renter: null, price: 175 }
  ],
  [
	{ room: '301', renter: null, price: 195 },
	{ room: '302', renter: null, price: 205 },
	{ room: '303', renter: null, price: 215 },
	{ room: '304', renter: null, price: 225 }
  ],
  [
	{ room: '401', renter: null, price: 245 },
	{ room: '402', renter: null, price: 255 },
	{ room: '403', renter: null, price: 265 },
	{ room: '404', renter: null, price: 275 }
  ]
]


Renting Component;
The renting interface should be set up as one button to start with. It will be the ‘express checkout’ option. This button should only display if there are rooms available otherwise a message should show in its place; ‘There are no rooms available at this moment’. This button should pick the cheapest available room and rent that to the user. A prompt should be used to ask the name who is renting this room. Once your user enters a name that rooms rented property should be set to the user's name, the state and context should be modified which in turn should also update the local storage.


Return Component;
	The return component should be set up as a flex display (use styling flexWrap: ‘wrap’) of all the rooms that are being rented. When the room is clicked upon a prompt to enter your name should appear. If you enter in the correct name the rooms renter property should be set back to null and the state/LS should update to reflect that.


Task List
	[] initialize React project
	[] create navigation bar
	[] create components for Rent and Return components.
	[] have the renting page or returning page display when a navbar button is pressed
	[] create context for hotel rooms
	[] create short algorithm to create room data programmatically and set that data as the initial value of the roomsContext
	[] provide roomsContext to the application in App.js
	[] create a button on Rent component, once pressed it should take a name and set the state/LS
	[] create the a display on the Return component that will show all the unavailable rooms
	[] implement features on Return items, when you click on one it should prompt the user to enter their name. If they enter the correct name the rooms renter property should go back to default.


Extra Tasks after completion of main app
	[] include the roomsContext in the navbar component and display how many rooms are currently available with simple text
	[] implement a monetary system. User gets $300 (or whatever amount) to start with. And as they rent rooms they have the rooms cost taken out (plus a fixed deposit). When they return their room they should get their deposit back. To keep track of how much money a user has that data should be in its own context and stored in the context’s state and LS.