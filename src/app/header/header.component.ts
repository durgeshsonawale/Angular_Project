import { Component,OnInit ,ViewChild} from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string="D";
  constructor(){}
  ngOnInit(): void {
    
  }
  
  

}
