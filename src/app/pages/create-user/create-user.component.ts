import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

    userForm!: FormGroup;

  constructor(){}

  ngOnInit():void{
     this.userForm = new FormGroup({
         name: new FormControl(null,[Validators.required]),
         email: new  FormControl(null,[Validators.required,Validators.email]),
         department: new  FormControl(null,[Validators.required]),
         location: new  FormControl(null,[Validators.required])
     });
  }

  onSave(){
    const values = this.userForm.value;
    console.log('form values=>',values);
    
  }


}
