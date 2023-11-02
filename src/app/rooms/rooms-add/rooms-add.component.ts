import { Component, OnInit } from '@angular/core';
import { RoomDetails } from '../rooms';
import { RoomsService } from '../rooms-services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit{
  room :RoomDetails={
    rating:0,
    price:0,
    checkIn:new Date(),
    checkOut:new Date(),
    roomNumber:'',
    amenities:'',
    photos:'',
    type:''


  }
  constructor(private roomService:RoomsService){}
  ngOnInit(): void {
    
  }
  addRoom(){
    this.roomService.addRoom(this.room).subscribe(data=> console.log(data))

  }

}
