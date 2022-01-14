import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { subject } from '../_models/subject';
import { SubjectService } from '../_service/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  form!: FormGroup;

  constructor(private subjectService: SubjectService, private formBuilder: FormBuilder) { }
  subject : subject[]=[]

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe(result => {
      this.subject= result
      console.log(this.subject)
    })

    this._formInit()
  }

  private _formInit(){
    this.form = this.formBuilder.group({
      subject_name: new FormControl(''),
      teacher_id: new FormControl(''),
      duration: new FormControl('')
    })
  }

  submitData(){
    const subjectData = {
      subject_name: this.form?.value.subject_name,
      teacher_id: this.form?.value.teacher_id,
      duration: this.form?.value.duration
    }
    console.log(subjectData)
    this.subjectService.AddSubject(subjectData).subscribe((res) => {
      console.log("Hasil:", res)
    })
  }

}
