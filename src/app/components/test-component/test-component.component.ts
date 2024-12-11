import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test-component',
  imports: [FormsModule],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
  
})
export class TestComponentComponent {

  email: string="";
  password: string="";
}
