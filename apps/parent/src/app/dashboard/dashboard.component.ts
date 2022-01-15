/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParentService } from '../_services/parent.service';
import { parent } from '../_models/parent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private parentService:ParentService, private route:ActivatedRoute) { }

  parentData: parent = {
    _id : '',
    first_name: '',
    last_name: '',
    gender: '',
    child: [{
      kelas : {
        class_name: ''
      }
    }]
  }
  idParent : any

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = [params['idParent']]
      console.log('id parent', this.idParent[0])
    })
    this.parentService.getParentById(this.idParent[0]).subscribe(hasil => {
      this.parentData = hasil
      console.log('hasil:', hasil)
    })
  }

}
