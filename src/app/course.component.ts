import {Component} from '@angular/core';
import {FacultyService} from './faculty.service';
@Component({
    selector:'course',
    template:`<h1>Angular Course: {{getTitle()}}</h1>
    <h1>Course Component</h1>
    <ul>
      <li *ngFor="let course of this.getCourses()" >
      {{course}}
      </li>
    </ul>

    <h1>Faculties Service</h1>
    <ul>
    <li *ngFor="let faculty of this.faculties" >
    {{faculty}}
    </li>
  </ul>

    `
})

export class CourseComponent
{
  private  title="Angular Course (ng)";
  private courses:string[];
  public faculties:string[];
  constructor(facultyService:FacultyService)
  {
      this.setCourses();
      this.faculties=facultyService.faculties();
  }
  public getTitle=()=>{
      return this.title;
  }

  public getCourses()
  {
    return this.courses;
  }

  public setCourses()
  {
    this.courses= ['course1','course2','course3'];
  }
}