import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';
import { environment } from 'src/environments/environment.development';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomDetails[]=[]

  constructor(@Inject(APP_SERVICE_CONFIG) private appconfi :AppConfig  ,
  private http: HttpClient
  ){ 
    //console.log(environment.apiEndpoints)
    console.log(appconfi.apiEndpoint)
  }
  //getRoomList$=this.http.get<RoomDetails[]>('/api/rooms').pipe(shareReplay(1));
  getRoomList(){
    return this.http.get<RoomDetails[]>(`/api/rooms`)
  }
  addRoom(room:RoomDetails){
    return this.http.post<RoomDetails[]>('/api/rooms',room)
  }
  editRoom(room : RoomDetails){
    return this.http.put<RoomDetails[]>(`/api/rooms/${room.roomNumber}`,room)
  }
  deleteRoom(roomId: string ){
    return this.http.delete<RoomDetails[]>(`/api/rooms/${roomId}`)
  }

  getPhotos(){
    const req=new HttpRequest(
      'GET','https://jsonplaceholder.typicode.com/photos',{
        reportProgress :true
      }
    );
    return this.http.request(req);
  }
  
}
