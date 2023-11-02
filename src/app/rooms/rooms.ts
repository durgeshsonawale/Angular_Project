export interface Room{
    totalRooms:number
    bookedRooms:number
    availableRooms:number
}

export interface RoomDetails{
    roomNumber:string 
    type:string 
    amenities:string
    price : number
    photos : string
    checkIn: Date
    checkOut : Date
    rating :number
}