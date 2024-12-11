import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string ="Avni";
  rollNo: number =121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  div1ClassName: string = 'bg-primary'

  constructor(private router:Router){
    console.log(this.firstName);
  }

  showMeMessage=()=>{
    alert("this is event binding")
  }

  navigateToAdmin=()=>{
    this.router.navigateByUrl('/admin')
  }
}
