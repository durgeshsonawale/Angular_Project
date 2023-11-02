import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-roomsbooking',
  templateUrl: './roomsbooking.component.html',
  styleUrls: ['./roomsbooking.component.css']
})
export class RoomsbookingComponent implements OnInit{
  id !: number
  id$!:Observable<number>
  constructor(private router : ActivatedRoute){}
  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   this.id=params['id']

    // })orr
    this.id=this.router.snapshot.params['id']
    this.id$=this.router.params.pipe(
      map(params => params['id'])
    )
  }

}
