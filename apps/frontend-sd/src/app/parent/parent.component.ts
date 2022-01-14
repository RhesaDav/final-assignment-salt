import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Parent } from '../_models/parent';
import { ParentService } from '../_service/parent.service';

@Component({
  selector: 'app-parent',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private parentService:ParentService) { }
  parents: Parent[]=[]

  ngOnInit(): void {
    this.parentService.getAllParent().subscribe(result => {
      this.parents= result
      console.log(this.parents)
    })
  }

}
