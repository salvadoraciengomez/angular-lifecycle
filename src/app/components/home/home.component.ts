import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'black'">Hallo</p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("Constructor:ngOnInit");
  }

  ngOnChanges(){
    console.log("Constructor:ngOnChanges");
  }
  ngDoCheck(){
    console.log("Constructor:ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("Constructor:ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("Constructor:ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("Constructor:ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("Constructor:ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("Constructor:ngOnDestroy");
  }
}
