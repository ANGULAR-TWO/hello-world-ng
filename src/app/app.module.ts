import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { DataComponent } from './data.component';
import {FacultyService} from './faculty.service';
import { HelloComponent } from './hello/hello.component';
import {SummaryPipe} from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component'
import {OnFavoriteChangedEventArgs} from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { TdfComponent } from './tdf/tdf.component';
import { HttpComponent } from './http/http.component'

@NgModule({
  declarations: [
    AppComponent, CourseComponent, HelloComponent, DataComponent, SummaryPipe, FavoriteComponent, PanelComponent, DirectivesComponent, InputFormatDirective, TdfComponent, HttpComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
