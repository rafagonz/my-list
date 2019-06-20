import { Directive, ElementRef, Input, OnInit, HostListener, HostBinding } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TouchSequence } from 'selenium-webdriver';

@Directive({
  selector: '[appColorStatus]'
})
export class ColorStatusDirective implements OnInit {
  @Input() item;

  @HostBinding('style.color')
  private color;

  constructor(private ref: ElementRef) {

  }

  ngOnInit(): void {
    if(this.item.id === 7){
      this.ref.nativeElement.style.color = 'red';
    }
    //console.log(this.item);
  }

  @HostListener('click')
  onClickSpan(){
    console.log('clicando elemento');
    //this.ref.nativeElement.style.color = 'blue';
    this.color = 'blue'
  }

}
