import { Component, Input,EventEmitter,Output ,ChangeDetectionStrategy,OnChanges,SimpleChanges} from '@angular/core';
import { OnInit } from '@angular/core';
import { Room, RoomDetails } from '../rooms';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit,OnChanges{
  @Input() roomsArr:RoomDetails[]=[];
   @Output() selectedRoom=new EventEmitter();
  constructor(){
    console.log("hello");
  }
  ngOnChanges(changes: SimpleChanges) {
    
  }
  
  ngOnInit() {
    
  }
  
 
  
  select(room: RoomDetails){
    this.selectedRoom.emit(room);

  }

}
