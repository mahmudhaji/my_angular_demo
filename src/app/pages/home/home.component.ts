import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  title: string = " this is string intercolletor"


  constructor(private rout:Router){}

  onVideo(){
    return this.rout.navigateByUrl("videos")
  }
  onImages(){
    return this.rout.navigateByUrl("images")
  }

}
