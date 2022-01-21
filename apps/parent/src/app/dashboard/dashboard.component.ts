/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ParentService } from '../_services/parent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  childData?: any[];
  allData: any[] = [];

  constructor(private parentService: ParentService) { }

  ngOnInit(): void { this.parentService
    .getParentById('61e29a10f9e10e4f8ad8913d')
    .subscribe((el) => {
      this.childData = el.child;
      console.log(this.childData);
      // this.parentData.child?.forEach((el: any) => {
      //   this.message.push({ message: el._id });
      // });
      // this.allData.push(this.parentData);
      // this.allData.push(this.message);
    });
}
}