import { Component,ViewChild, ViewContainerRef,OnInit ,AfterViewInit} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    
  ){
    console.log("hii i am in app component")
  }
  ngOnInit(): void {
    
  }
  // ngAfterViewInit(): void {
  //   const componentRef=this.vcr.createComponent(RoomsComponent);
  // }
  title = 'HotelManagement';
  @ViewChild('user',{read: ViewContainerRef}) vcr !:ViewContainerRef; 
}
