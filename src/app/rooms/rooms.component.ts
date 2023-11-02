import { Component, OnInit, DoCheck, ViewChild, AfterViewChecked, Self } from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { RoomsService } from './rooms-services/rooms.service';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit, AfterViewChecked {

  isButtonDisabled: boolean = true
  room: Room = {
    totalRooms: 50,
    bookedRooms: 40,
    availableRooms: 10

  }
  roomList !: RoomDetails[];
  stream = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);

  })

  constructor(private roomsService: RoomsService) {

    console.log(" heyyyyyyyy");


  }
  ngAfterViewChecked(): void {

  }

  toggle() {
    this.isButtonDisabled = !this.isButtonDisabled
  }
  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;
  ngOnInit(): void {
    this.stream.subscribe(data => { console.log(data) })
    this.stream.subscribe({
      next: (a) => console.log(a),
      complete: () => console.log('complete'),
      error: (err) => console.log('err')
    })
    this.roomsService.getRoomList().subscribe(room => { this.roomList = room; });
  }

  add() {
    const room12: RoomDetails = {
      roomNumber: '1',
      type: "NON-AC",
      amenities: '4 BHK',
      price: 25000,
      photos: 'string',
      checkIn: new Date('17-01-2023'),
      checkOut: new Date('19-01-2024'),
      rating: 4
    }
    //this.roomList.push(room12)
    this.roomsService.addRoom(room12).subscribe(a => this.roomList = a);
  }
  editRoom() {
    const room12: RoomDetails = {
      roomNumber: '3',
      type: "NON-AC",
      amenities: '4 BHK',
      price: 25000,
      photos: 'string',
      checkIn: new Date('17-01-2023'),
      checkOut: new Date('19-01-2024'),
      rating: 4
    }
    this.roomsService.editRoom(room12).subscribe(a => this.roomList = a)

  }
  deleteRoom(room: RoomDetails) {
    this.roomsService.deleteRoom(room.roomNumber).subscribe(a => this.roomList = a)
  }

}
