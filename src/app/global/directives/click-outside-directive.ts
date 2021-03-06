import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
  selector: '[clickOutside]'
})

export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef){}

  @HostListener('document:click' , ['$event.target'])
  public onClick(target:any){
    const clickInside = this.elementRef.nativeElement.contains(target);
    if(!clickInside){
      this.clickOutside.emit();
    }
  }
}