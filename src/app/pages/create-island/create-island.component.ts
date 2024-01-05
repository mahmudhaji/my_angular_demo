import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-create-island',
  templateUrl: './create-island.component.html',
  styleUrls: ['./create-island.component.css']
})
export class CreateIslandComponent {
    
      submitForm!:FormGroup;


  constructor(private islandService: IslandService,private router:Router) { }

    ngOnInit() : void{
      this.configureSubmitForm();
    }

    configureSubmitForm(){
      this.submitForm = new FormGroup({
        name: new FormControl(null,[Validators.required])
      });
    }

    onSave(){
      const values = this.submitForm.value;
      console.log('islands form values => ', values);

      this.islandService.add(values).subscribe((response:any) =>{

        console.log('create island responce => ',response);
        this.router.navigateByUrl('/Islands')
        
      }, (error:HttpErrorResponse) => {
        console.log('error');   
      })
      
    }
}
