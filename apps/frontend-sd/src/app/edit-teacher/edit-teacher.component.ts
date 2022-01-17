import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../_models/teacher';
import { KelasServices } from '../_service/kelas.service';
import { TeacherService } from '../_service/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  form!: FormGroup
  formImage!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private kelasService: KelasServices,
    private route: ActivatedRoute
  ) {}
  idTeacher: any;
  idKelas: any;
  imageTeacher: any;
  imageDisplay: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idTeacher = [params['idTeacher']];
      console.log(this.idTeacher[0]);
    });

    this._teacherInit();
    this._teacherImageInit();
    this.teacherEditForm(this.idTeacher[0]);
  }

  private _teacherInit() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      kelas: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      short_bio: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }
  private _teacherImageInit() {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  private teacherEditForm(id: any) {
    this.teacherService.getTeacherById(id).subscribe((res) => {
      this.imageTeacher = res.image;
      console.log('LInk Gambar : ', this.imageTeacher);
      this.teacherForm['first_name'].setValue(res.first_name);
      this.teacherForm['last_name'].setValue(res.last_name);
      this.teacherForm['gender'].setValue(res.gender);
      this.teacherForm['date_of_birth'].setValue(res.date_of_birth);
      this.teacherForm['blood_group'].setValue(res.blood_group);
      this.teacherForm['religion'].setValue(res.religion);
      this.teacherForm['email'].setValue(res.email);
      this.teacherForm['kelas'].setValue(res.kelas.class_name);
      this.teacherForm['address'].setValue(res.address);
      this.teacherForm['phone'].setValue(res.phone);
      this.teacherForm['short_bio'].setValue(res.short_bio);
      this.teacherForm['subhect'].setValue(res.Subject);
    });
  }

  editImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formImage.patchValue({ image: file });
      this.formImage.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }
  editGuru() {
    this.kelasService.getAllClass().subscribe((res) => {
      res.forEach((el) => {
        if (el.class_name == this.teacherForm['kelas'].value) {
          this.idKelas = el._id;
        }
      });
    });

    const teacherData: Teacher = {
      first_name: this.teacherForm['first_name'].value,
      last_name: this.teacherForm['last_name'].value,
      gender: this.teacherForm['gender'].value,
      date_of_birth: this.teacherForm['date_of_birth'].value,
      blood_group: this.teacherForm['blood_group'].value,
      religion: this.teacherForm['religion'].value,
      kelas: this.idKelas,
      address: this.teacherForm['address'].value,
      phone: this.teacherForm['phone'].value,
      short_bio: this.teacherForm['short_bio'].value,
      Subject: this.teacherForm['subject'].value
    };

    this.teacherService
      .editTeacherByHeadmaster(this.idTeacher, teacherData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  submitImage() {
    const imageTeacher = new FormData();
    Object.keys(this.imageForTeacherForm).map((key) => {
      imageTeacher.append(key, this.imageForTeacherForm[key].value);
    });

    console.log('TEST IMAGE : ', imageTeacher);

    this.teacherService
      .editTeacherImageByHeadmaster(this.idTeacher, imageTeacher)
      .subscribe((res) => {
        console.log('Hasil : ', res);
      });
  }

  get teacherForm() {
    return this.form.controls;
  }
  get imageForTeacherForm() {
    return this.formImage.controls;
  }
}