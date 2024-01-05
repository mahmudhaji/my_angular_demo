import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { SessionComponent } from './admin/session/session.component';
import { VenueComponent } from './admin/venue/venue.component';
import { LoginComponent } from './pages/login/login.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ImagesComponent } from './pages/images/images.component';
import { SignupTrainingComponent } from './pages/signup-training/signup-training.component';
import { ActiveparticipantsComponent } from './admin/activeparticipants/activeparticipants.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { UserComponent } from './pages/user/user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { IslandsComponent } from './pages/islands/islands.component';
import { CreateIslandComponent } from './pages/create-island/create-island.component';
import { EditIslandComponent } from './pages/edit-island/edit-island.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signuptraining",component:SignupTrainingComponent},
  {path:"",component:MainlayoutComponent,children:[
    {path:"mainlayout",component:HomeComponent},
    {path:"session",component:SessionComponent},
    {path:"venue",component:VenueComponent},
    {path:"videos",component:VideosComponent},
    {path:"images",component:ImagesComponent},
    {path:"active",component:ActiveparticipantsComponent},
    {path:"participant",component:ParticipantComponent},
    {path:"User",component:UserComponent},
    {path:"CreateUser",component:CreateUserComponent},
    {path:"Islands",component:IslandsComponent},
    {path:"createIsland",component:CreateIslandComponent},
    {path:"editIsland/:islandId",component:EditIslandComponent}
    
  ],


}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
