import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  //create signal without datatype
  firstname=signal('Avni');

  //create signal with datatype
  lastname=signal<string>('Sangani');

  courseName:string="Angular"

  rollNo=signal<number>(0)

  constructor(){
    const value=this.firstname

    setTimeout(() =>{
      this.courseName="Vue JS"
      this.firstname.set("Diya")
    },2000)
  }

  incrementVal=()=>{
    this.rollNo.update(oldVal=>oldVal+1)
  }

  fullName = linkedSignal({
    source:this.firstname,
    computation: (newOption,previous)=>{
      const fullName = newOption + " " + this.lastname();
      return fullName;
    }
  })

  changeFName=()=>{
    this.firstname.set("Anu")
  }
}
