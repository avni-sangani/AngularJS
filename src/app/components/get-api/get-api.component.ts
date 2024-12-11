import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [NgIf,NgFor],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:any=[];

  constructor(private http:HttpClient){

  }

  getUsers=() => {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
      this.userList = response
    })
  }

}
