/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../_services/parent.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  opened = false;
  showProfile = false;
  showInfo = false;
  showProfile2 = false;
  showProfile3 = false;
  parentData!: any;

  constructor(private parentService: ParentService) { }
// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
ngOnInit(): void {
  this.parentService
    .getParentById('61e29a10f9e10e4f8ad8913d')
    .subscribe((el) => {
      this.parentData = el;
      console.log('HASIL : ', this.parentData.child);
    });
}
}