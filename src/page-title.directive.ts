import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPageTitleDirective]'
})
export class PageTitleDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'aqua';
    this.elementRef.nativeElement.style.padding = '1rem';
    this.elementRef.nativeElement.style.borderRadius = '0.5rem';
    this.elementRef.nativeElement.style.color = '#333333';
    this.elementRef.nativeElement.style.fontWeight = 'bold'
  }
}