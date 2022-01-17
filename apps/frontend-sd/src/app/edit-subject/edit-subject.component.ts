import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { subject } from '../_models/subject';
import { SubjectService } from '../_service/subject.service';
import { TeacherService } from '../_service/teacher.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  form! : FormGroup

  constructor(private subjectService:SubjectService, private formBuilder:FormBuilder, private route: ActivatedRoute, private teacherService:TeacherService) { }
  idSubject: any
  idTeacher: any

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idSubject = [params['idSubject']]
      console.log(this.idSubject[0])
    })

    this._subjectInit()
    this.subjectEditForm(this.idSubject[0])
  }

  private _subjectInit(){
    this.form = this.formBuilder.group({
      subject_name: ['', Validators.required],
      teacher_id: ['', Validators.required],
      duration: ['', Validators.required]
    })
  }

  private subjectEditForm(id: any){
    this.subjectService.getSubjectById(id).subscribe((res) => {
      this.subjectForm['subject_name'].setValue(res.subject_name)
      this.subjectForm['teacher_id'].setValue(res.teacher_id._id)
      this.subjectForm['duration'].setValue(res.duration)
    })
  }

  editSubject() {
    this.teacherService.getAllTeacher().subscribe((res) => {
      res.forEach((el) => {
        if (el.teacher_id == this.subjectForm['teacher_id'].value){
          this.idTeacher = el.teacher_id
        }
      })
    })

    const subjectData: subject = {
      subject_name: this.subjectForm['subject_name'].value,
      teacher_id: this.subjectForm['teacher_id'].value,
      duration: this.subjectForm['duration'].value
    }

    this.subjectService
    .editSubject(this.idSubject, subjectData)
    .subscribe((res) => {
      console.log('hasil edit :', res)
    })
  }

  get subjectForm() {
    return this.form.controls
  }
}
