
import { Component,Input } from '@angular/core';

@Component({
    selector: 'data',
    template: `
    <h1>### Custom Pipes ### </h1>
    {{text | summary:'3'}}

    <h1>### Custom Pipes ####</h1>
    <h1>### Built In Pipe ###</h1>
    {{course.name | uppercase | lowercase}}<br/>
    {{course.students | number}} <br/>
    {{course.rating| number:'3.2-3'}}<br/>
    {{course.price | currency: 'AUD':true:'3.2-2'}}<br/>
    {{course.releaseDate | date:'shortDate' }}<br/>
     UpperCase/LowerCase/Decimal/Currency/Percent<br/>
     https://angular.io/api/common/DatePipe<br/>
     common module comes under browser module

    <h1>### Two Way Bindinng ### </h1>
    
    <input [value]="name" (keyup.enter)="onKeyUp5()"/>
    <input [value]="name" (keyup.enter)="name= $event.target.value; onKeyUp5()"/>
    
    <input [(ngModel)]="name" (keyup.enter)="onKeyUp5()"/>
    
    <h1> ### Template Variables ### </h1>
    <input (keyup.enter)="onKeyUp3($event)"/>
    <input #email (keyup.enter)="onKeyUp4(email.value)"/>
    

    <h1> ### Event Filtering ### </h1>
    <input (keyup.enter)="onKeyUp()"/>
    <input (keyup)="onKeyUp2($event)"/>


    <h1> ### Event Binding ### </h1>
    <div (click)="onDivClick()">
    <button (click)="onButtonClick($event)"> SAVE </button>
    </div>
    <h1> ### style binding: with property binding </h1>
    <div [style.backgroundColor]="'isStyleEnabled' ? 'blue' : 'green' "> Color changes </div>

    <h1> ### class binding : with property binding ### </h1>

    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    <h1>#### Using booststrap ###</h1>
    -> npm install boostrap --save <br/>
    -> ^3.3.7 ; install most recent major version [major.minor.version]<br/>
    -> global styles.css @import "~bootstrap/dist/css/bootstrap.css"<br/>

    <button class="btn btn-primary">Save</button>
    <h1>##### Property Data binding ####</h1>
    <h2> with interpollation (2 way) </h2>
    <h3>{{title}}  </h3>
    <img src="{{imgUrl}}"/>

    <h2>Property binding: Using square bracket: component to dom(not 2 way)</h2>
    <img [src]="imgUrl"/> src is a html as well as dom property
    <h3 [textContent]="title"> </h3> textContent is a dom property

    <h2>Attribute Binding: Html property always not work(so use as attribute)</h2>
    <table border="1">
        <tr>
        <td [attr.colspan]="colspan">Hello Here</td>
        </tr>
        <tr>
        <td>Col1</td><td>Col2</td>
        </tr>
    </table>

    colspan is a html property but not a dom property.in dom it is attr.colspan.
    but most of the html property are binded into same property of dom
    `
})


export class DataComponent {
    title = "this is title";
    imgUrl = "http://lorempixel.com/400/200";
    colspan = 2;
    isActive = true;
    isStyleEnabled = true;

    onDivClick() {
        console.log('div clicked');
    }
    onButtonClick($event) {
        //$event.stopPropagation();
        console.log('button save clicked', $event);
    }

    onKeyUp() {
        console.log('eneter key was pressed');
    }

    onKeyUp2($event) {
        if ($event.keyCode === 13)
            console.log('enter key was pressed traditionally');
    }

    onKeyUp3($event) {
        console.log($event.target.value);
    }

    onKeyUp4(email) {
        console.log(email);
    }

    name="me@example.com";
    onKeyUp5()
    {
    console.log(this.name);
    }

    course =
    {
     name:"Angular",
     rating:"4.9756",
     students:"35",
     price:"190.95",
     releaseDate:new Date(2016,3,1)
    }

    text="hello world, how are you. we are learning angular js";
}