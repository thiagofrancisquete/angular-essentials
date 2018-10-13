import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter')
  onMouseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'teal'
    );*/
    this.bckg = 'teal'; // faz o mesmo que o codigo de cima
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'orange'
    );*/
    this.bckg = 'orange'; // faz o mesmo que o codigo de cima
  }

  @HostBinding('style.backgroundColor')
  bckg: string;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {}
}
