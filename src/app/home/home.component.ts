import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages: string[] = ['english','manderin','spanish','other'];
  model = new Employee('','', true, 'w2', 'default');
  hasLanguageError:boolean = false;

  firstNameToUpperCase(value: string) {
    if(value.length > 0)
    this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    else
    this.model.firstName = value;
  }
  validateL(value) {
    if (value === "default"){
      // console.log("haha");      
      this.hasLanguageError = true;
    }else{
      this.hasLanguageError = false;
    }
    
  }
}
