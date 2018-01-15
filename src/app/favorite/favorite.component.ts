import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[
    `.glyphicon{
      color:green;
    }
    .glyphicon-star{
      background:black;
    }`
  ]
 // inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {
//  @Input() isFavorite:boolean;
//isFavorite:boolean;
@Input('is-favorite') isSelected:boolean;
@Output('change') click=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickStar()
  {
      this.isSelected=!this.isSelected;
      // this.change.emit();
    //  this.change.emit(this.isSelected);
     this.click.emit({newValue:this.isSelected});
  }

}
export interface OnFavoriteChangedEventArgs
{
  newValue:boolean;
}
