// The allRooms room data needs to be stored in state and localStorage. This is so the whole app can have read/set access to the data, make sure you create a roomsContext hook and provide that context to the whole application. Use that context in functional components when the data needs to be read or set. The room's information needs to be stored in both a context and localStorage as a two dimensional array, where each nested element is an object. 
// Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]
// *triple dots represent room data that would be there
// As you can see from above each sub array will represent a floor (four total), and each floor will have four rooms. Each room will be represented as an object with room (room number), renter (who is renting currently), and price (in dollars) properties. Note that a room not being rented should have a renter value of null. This will be used to represent a room not being rented.
// When your application is first used the data should not be hard-coded, but should be produced programmatically. 

// Room prices equation; Price = 
// ( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

// Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155
// Room 301 = ( 50*3 ) + ( 10*1 - 10 ) + 45 = $195

// function bookedRooms(numFloors, numRooms) {

//     let allRooms = []
//     let newArr = []

//     for (let i = 1; i <= numFloors; i++) {
//         for (let j = 1; j <= numRooms; j++) {
//            let roomNum = i * 100 + j
//            let renter = null
//            let cost = ((50 * i) + ((10 * j) - 10) + 45)
//             newArr.push({
//                 room: roomNum,
//                 renter: null,
//                 price: cost}) 
//     }
//      allRooms.push(newArr)
//      return allRooms
//     }
// }


// module.exports = bookedRooms;

module.exports = {
    bookARoom: (numFloors, numRooms) => {
        let allRooms = [];
        for (let i = 1; i <= numFloors; i++) {
            for (let j = 1; j <= numRooms; j++) {
                allRooms.push({room: (i)*100+j,
                               price: 50*i + (10*j-10) + 45,
                               renter: null
                })
            }
        }
        let chunkedArr = [];
        let index = 0;
        while (index < allRooms.length) {
            chunkedArr.push(allRooms.slice(index, numRooms+index))
            index += numRooms;
        }
        allRooms = chunkedArr;
        console.log(allRooms)
        return allRooms;
    }
}