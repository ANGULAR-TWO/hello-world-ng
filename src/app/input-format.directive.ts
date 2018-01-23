import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener("focus")
  onFocus() {
    console.log("focus")
  }

  //@Input('format') format;
  @Input('appInputFormat') format
  @HostListener("blur")
  onBlur() {
    console.log("blur");
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
    else {
      this.el.nativeElement.value = value.toUpperCase();      
    }
  }


}
