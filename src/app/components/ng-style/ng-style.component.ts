import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano+'px'}">
      This is a paragraph
    </p>

    <p [style.fontSize]="'10px'" [style.backgroundColor]="color">
      This is another paragraph
    </p>

    <p [style.fontSize.px]="'15'" [style.backgroundColor]="'green'">
      This is a third paragraph
    </p>

    <button class="btn btn-primary" (click)="tamano=tamano+5"><i class="fa fa-plus"></i></button>
    <button class="btn btn-primary" (click)="tamano=tamano-5"><i class="fa fa-minus"></i></button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number=40;
  color:string='red';
  constructor() { }

  ngOnInit(): void {
  }

}
