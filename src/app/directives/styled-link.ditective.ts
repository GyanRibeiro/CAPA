import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyledLink]',
})
export class StyledLink implements OnInit {
  @Input() linkColor: string = '#000';
  @Input() hoverColor: string = '#fdfd96';
  @Input() backgroundColor: string = '#fff';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.linkColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.hoverColor
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.backgroundColor
    );
  }
}
