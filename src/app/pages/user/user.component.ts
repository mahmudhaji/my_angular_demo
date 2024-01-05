import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users =[
    {name:"mahmud",
    department:"ICT",
    active:true
    },
    {name:"haji",
    department:"ICT",
    active:false
    },
    {name:"msaada",
    department:"ICT",
    active:true
    },
    {name:"ibrahim",
    department:"ICT",
    active:true
    }

  ]

  constructor(private router: Router){}

  viewDetails(date: any){
    console.log('user details',date);
    
  }
  onCreateUser(){
    this.router.navigateByUrl('CreateUser');
    // this.router.navigate(['/CreateUser']);
  }

}
