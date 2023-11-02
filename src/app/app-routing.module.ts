import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsbookingComponent } from './rooms/roomsbooking/roomsbooking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';

const routes: Routes = [{ path:'employee',component:EmployeeComponent},
{path:'rooms',component:RoomsComponent},
{path:'',redirectTo:'/employee',pathMatch:'full'},
{path:'rooms/add',component:RoomsAddComponent},
{path:'rooms/:id',component:RoomsbookingComponent},
{path: '**',component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
