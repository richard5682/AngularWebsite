import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonHighlightDirective implements OnInit{
  @Input() color1;
  mouseinside;
  pointerdown;
  private element;
  constructor(el:ElementRef) {
    this.element = el.nativeElement;
    
  }
  ngOnInit(){
    this.element.style.backgroundColor = this.color1;
  }
  @HostListener('mouseenter') f1(){
    this.mouseinside = true;
    this.changeColor();
  }
  @HostListener('mouseleave') f2(){
    this.mouseinside = false;
    this.changeColor();
  }
  @HostListener('pointerdown') f3(){
    this.pointerdown = true;
    this.changeColor();
  }
  @HostListener('pointerup') f4(){
    this.pointerdown = false;
    this.changeColor();
  }
  changeColor(){
    if(this.pointerdown){
      this.element.style.filter = "brightness(145%)"
    }else{
      this.element.style.filter = "brightness(100%)"
      if(this.mouseinside){
        this.element.style.filter = "brightness(125%)"
      }
    }
  }
}
