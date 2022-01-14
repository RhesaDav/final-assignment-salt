/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../_models/student';
import { KelasServices } from '../_service/kelas.service';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-frontend-sd-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private kelasService: KelasServices,
    private route: ActivatedRoute
  ) {}
  idStudent: any;
  idKelas: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = [params['idStudent']];
      console.log(this.idStudent[0]);
    });

    this._studentInit();
    this.studentEditForm(this.idStudent[0]);
  }

  private _studentInit() {
    this.form = this.formBuilder.group({
      year_academic: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      father_occupation: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      addmission_date: ['', Validators.required],
      kelas: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      short_bio: ['', Validators.required],
      status_siswa: ['', Validators.required],
      image: ['', Validators.required],
    });
  }
  private studentEditForm(id: any) {
    this.studentService.getStudentById(id).subscribe((res) => {
      this.studentForm['year_academic'].setValue(res.year_academic);
      this.studentForm['first_name'].setValue(res.first_name);
      this.studentForm['last_name'].setValue(res.last_name);
      this.studentForm['gender'].setValue(res.gender);
      this.studentForm['father_name'].setValue(res.father_name);
      this.studentForm['mother_name'].setValue(res.mother_name);
      this.studentForm['date_of_birth'].setValue(res.date_of_birth);
      this.studentForm['father_occupation'].setValue(res.father_occupation);
      this.studentForm['blood_group'].setValue(res.blood_group);
      this.studentForm['religion'].setValue(res.religion);
      this.studentForm['email'].setValue(res.email);
      this.studentForm['addmission_date'].setValue(res.addmission_date);
      this.studentForm['kelas'].setValue(res.kelas.class_name);
      this.studentForm['address'].setValue(res.address);
      this.studentForm['phone'].setValue(res.phone);
      this.studentForm['short_bio'].setValue(res.short_bio);
      this.studentForm['image'].setValue(res.image);
      this.studentForm['status_siswa'].setValue(res.status);
    });
  }

  editSiswa() {
    this.kelasService.getAllClass().subscribe((res) => {
      res.forEach((el) => {
        if (el.class_name == this.studentForm['kelas'].value) {
          this.idKelas = el._id;
        }
      });
    });

    const studentData: Student = {
      first_name: this.studentForm['first_name'].value,
      year_academic: this.studentForm['year_academic'].value,
      last_name: this.studentForm['last_name'].value,
      gender: this.studentForm['gender'].value,
      father_name: this.studentForm['father_name'].value,
      mother_name: this.studentForm['mother_name'].value,
      date_of_birth: this.studentForm['date_of_birth'].value,
      father_occupation: this.studentForm['father_occupation'].value,
      blood_group: this.studentForm['blood_group'].value,
      religion: this.studentForm['religion'].value,
      addmission_date: this.studentForm['addmission_date'].value,
      kelas: this.idKelas,
      address: this.studentForm['address'].value,
      phone: this.studentForm['phone'].value,
      short_bio: this.studentForm['short_bio'].value,
      status: this.studentForm['status_siswa'].value,
      image: this.studentForm['image'].value,
    };

    this.studentService
      .editStudentByHeadmaster(this.idStudent, studentData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  get studentForm() {
    return this.form.controls;
  }
}
