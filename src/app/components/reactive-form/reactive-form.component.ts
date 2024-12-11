import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  constructor(){
    const isValid= this.userForm.valid  
  }

  userForm: FormGroup=new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    city: new FormControl(''),
    state:  new FormControl('Goa')
  })

  onUserSave=() => {
    const formValue = this.userForm.value
  }
}
