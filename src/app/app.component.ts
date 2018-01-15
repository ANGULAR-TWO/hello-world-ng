import { Component,ViewEncapsulation } from '@angular/core';
import {OnFavoriteChangedEventArgs} from './favorite/favorite.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Angular app';
  post={
    title:"Favorite Title",
    isFavorite:true
  }

  /*
onFavoriteChange(){
    console.log("changed:");
    
  }
  */
  /*
  onFavoriteChange(isFavorite){
    console.log("changed:",isFavorite);
    
  }*/

  // onFavoriteChange(eventArgs){
  //   console.log("changed:",eventArgs);
    
  // }

  // onFavoriteChange(eventArgs:{newValue:boolean}){
  //   console.log("changed:",eventArgs);
    
  // }

  onFavoriteChange(eventArgs:OnFavoriteChangedEventArgs){
    console.log("changed:",eventArgs);
    
  }
}

