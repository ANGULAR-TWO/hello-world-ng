import { Component, OnInit, Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated  
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
