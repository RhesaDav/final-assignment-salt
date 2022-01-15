/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-sd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  opened=false;

  showTeacher = false
  showStudent = false
  showParent = false
  showClass = false

  constructor() { }

  ngOnInit(): void {
  }

}
