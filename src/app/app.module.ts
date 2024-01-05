import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { SessionComponent } from './admin/session/session.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { VenueComponent } from './admin/venue/venue.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './pages/login/login.component';
import { MaterialComponent } from './pages/material/material.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ImagesComponent } from './pages/images/images.component';
import {MatCardModule} from '@angular/material/card';
import { SignupTrainingComponent } from './pages/signup-training/signup-training.component';
import { ParticipantsComponent } from './admin/participants/participants.component';
import { MatMenuModule } from '@angular/material/menu';
import { ActiveparticipantsComponent } from './admin/activeparticipants/activeparticipants.component';
import { ParticipantComponent } from './pages/participant/participant.component';
import { UserComponent } from './pages/user/user.component';
import { CardComponent } from './componets/card/card.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { IslandsComponent } from './pages/islands/islands.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateIslandComponent } from './pages/create-island/create-island.component';
import { EditIslandComponent } from './pages/edit-island/edit-island.component';


@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    HomeComponent,
    SessionComponent,
    VenueComponent,
    LoginComponent,
    MaterialComponent,
    VideosComponent,
    ImagesComponent,
    SignupTrainingComponent,
    ParticipantsComponent,
    ActiveparticipantsComponent,
    ParticipantComponent,
    UserComponent,
    CardComponent,
    CreateUserComponent,
    IslandsComponent,
    CreateIslandComponent,
    EditIslandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatStepperModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
