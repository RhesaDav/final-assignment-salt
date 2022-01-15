import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parent } from '../_models/parent';
import { ParentService } from '../_services/parent.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private parentService : ParentService, private route: ActivatedRoute) { }

  parentData: parent = {
    _id : '',
    first_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    occupation: '',
    blood_group: '',
    religion: '',
    email: '',
    address: '',
    phone: ''
  }

  idParent : any

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = [params['idParent']]
      console.log('id parent:', this.idParent[0])
    })
    this.parentService.getParentById(this.idParent[0]).subscribe(
      (hasil) => {
        this.parentData = hasil
        console.log('hasil:', hasil)
      }
    )
  }

}
