import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor,NgClass,NgStyle],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList:string[] = ["New York", "Alaska", "Boston"];

  divBgColor:string ="bg-primary";

  div1BgColor:string ="";

  changeBg=(className:string)=>{
    this.divBgColor=className
  }

  addStyle=(name:string)=>{
    this.div1BgColor=name
  }
}
