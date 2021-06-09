import { Component, ViewChild, ElementRef } from '@angular/core';
import {DashboardComponent} from "../app/dashboard/dashboard.component";
import {DialogPosition, MatDialog} from "@angular/material/dialog";

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor(
    private dialog : MatDialog
  ) { }
  
  isReadMore = true
  selengkapnya = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  showText1 () {
    this.selengkapnya = !this.selengkapnya
  }
  
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

openDialog(): void {


  // const rect=element?element.getBoundingClientRect():{top:300,left:400}
  const dialogRef = this.dialog.open(DashboardComponent, {
    width: '1300px',
    // data: {name: this.name, animal: this.animal},
    // position:dialogPosition
  });
}

}
