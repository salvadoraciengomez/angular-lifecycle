import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})



export class ResaltadoDirective {

  @Input("appResaltado") colorEntrada:string;
  constructor(private el : ElementRef) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.colorEntrada || 'orange')
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor = null;
    // console.log('yaSalio');
    this.resaltar(null);
  }

  private resaltar( color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
