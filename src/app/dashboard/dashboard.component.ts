import { Component, OnInit } from '@angular/core';
import {DialogPosition, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog : MatDialog
  ) { }
   
  

  ngOnInit(): void {
  }


}
