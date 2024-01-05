import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IslandService } from 'src/app/services/island.service';

@Component({
  selector: 'app-edit-island',
  templateUrl: './edit-island.component.html',
  styleUrls: ['./edit-island.component.css']
})
export class EditIslandComponent {

  submitForm!:FormGroup;

  constructor(private route: ActivatedRoute,
    private islandsService:IslandService,
    private router:Router) { }

  ngOnInit(): void {
    
      this.configureSubmitForm();

    this.route.params.subscribe((paramsValues:any) =>{
      console.log('passed params =>', paramsValues);
      const islandId = paramsValues.islandId;
      this.fecthIslandById(islandId);
    });
  }

  configureSubmitForm(){
    this.submitForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null,[Validators.required])
    });


    // if your form has many input is good to use this
     
      // const user ={id:1, name:'ali'}
      // const objectKeys = Object.keys(this.submitForm.value);
      // console.log('form value =>',this.submitForm.value);
      
      // console.log('object keys =>',objectKeys);
      

  }


  fecthIslandById(islandId: number) {
    this.islandsService.getById(islandId).subscribe((response:any) =>{
    console.log('get By id response =>',response);  
    // this.submitForm.get('id')?.setValue(response.id);
    // this.submitForm.get('name')?.setValue(response.name);                    //this make form comes with such data
 
      Object.keys(response).forEach(key => {
          if(this.submitForm.value.hasOwnProperty(key)) {
            this.submitForm.get(key)?.setValue(response[key]);
        } 
      })
       
    }, (error: HttpErrorResponse) => {
        console.log('error => ', error); 
        
    })
  }

  onSave(){
      const values = this.submitForm.value;
      this.islandsService.update(values).subscribe((response) => {
          // show success message
          this.router.navigateByUrl('/Islands')
      });
  }

}
