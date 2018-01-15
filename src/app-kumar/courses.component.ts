import { Component } from '@angular/core';
import { CoursesService } from './courses.servcie';

@Component({
  selector: 'Courses',
  template: `<h1>{{title}}</h1>
            <ul>
              <li *ngFor="let course of courses">
                {{course}}
              </li>
            </ul>
            <div (click)="DivClick()">
                 <button (click)="onSave($event)">SAVE</button>
            </div>
            <input #email1 (keyup.enter)="onKeyUp(email1.value)"/>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp1()"/>
            {{text | summary :10}}
            `
})
export class CoursesComponent {
  title = 'List Of Courses';
  courses;
 
  constructor(courseService:CoursesService){
    
    this.courses=courseService.getCourses();
    console.log(this.courses);
    
  }
  DivClick(){
    console.log("Div is click");
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("click method",$event);
  }
  email="hdgg@gmail.com";
  onKeyUp(email1){
    console.log("email value:"+email1);
  }
  onKeyUp1(){
    console.log("email value:"+this.email);
  }
  text = 'This is a custom pipe.Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
}