import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  alerta:string='alert-danger';
  propiedades:Object={
    dangerous: true
  };
  dangerous:boolean=false;

  constructor() {  }

  ngOnInit(): void {
  }

}
