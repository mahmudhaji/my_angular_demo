import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private rout:Router){}

  onLayout(){
    return this.rout.navigateByUrl("mainlayout")
  }

}
