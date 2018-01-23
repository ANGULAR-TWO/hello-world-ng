import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  title="ng-directives from component";
  courses=[1,2]; // ngIf
  viewMode='tree';//map or  list // ngSwitchCase
  courseList=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
  ];

  onAdd()
  {
    this.courseList.push({id:3,name:'course4'});
  }

  onRemove(course)
  {
    let index=this.courseList.indexOf(course);
    this.courseList.splice(index,1);
  }

  onChange(course)
  {
    course.name="updated course name";
  }

  courseInfo=[];
  loadCourses()
  {
    this.courseInfo=[
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'},  
    ]

  }

  trackCourse(index,course)
  {
    return index= course ? course.index: undefined;
  }
  
  task={
    title:'Physics',
    assignee: null // may be not loaded from server
    /*{
      name:'rabindra'
    }*/
  }
  
  constructor() { }

  ngOnInit() {
  }

}
