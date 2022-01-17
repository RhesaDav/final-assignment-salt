import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parent } from '../_models/parent';
import { KelasServices } from '../_service/kelas.service';
import { ParentService } from '../_service/parent.service';

@Component({
  selector: 'app-edit-parent',
  templateUrl: './edit-parent.component.html',
  styleUrls: ['./edit-parent.component.css']
})
export class EditParentComponent implements OnInit {
  form!: FormGroup;
  formImage!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private parentService: ParentService,
    private kelasService: KelasServices,
    private route: ActivatedRoute
  ) {}
  idParent: any;
  idKelas: any;
  imageParent: any;
  imageDisplay: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idParent = [params['idParent']];
      console.log(this.idParent[0]);
    });

    this._parentInit();
    this._parentImageInit();
    this.parentEditForm(this.idParent[0]);
  }

  private _parentInit() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      occupation: ['', Validators.required],
      blood_group: ['', Validators.required],
      religion: ['', Validators.required],
      email: ['', Validators.required],
      addmission_date: ['', Validators.required],
      kelas: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      short_bio: ['', Validators.required],
    });
  }
  private _parentImageInit() {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
  }

  private parentEditForm(id: any) {
    this.parentService.getParentById(id).subscribe((res) => {
      this.imageParent = res.image;
      console.log('LInk Gambar : ', this.imageParent);
      this.parentForm['first_name'].setValue(res.first_name);
      this.parentForm['last_name'].setValue(res.last_name);
      this.parentForm['gender'].setValue(res.gender);
      this.parentForm['date_of_birth'].setValue(res.date_of_birth);
      this.parentForm['occupation'].setValue(res.occupation);
      this.parentForm['blood_group'].setValue(res.blood_group);
      this.parentForm['religion'].setValue(res.religion);
      this.parentForm['email'].setValue(res.email);
      this.parentForm['address'].setValue(res.address);
      this.parentForm['phone'].setValue(res.phone);
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
  editOrtu() {
    this.kelasService.getAllClass().subscribe((res) => {
      res.forEach((el) => {
        if (el.class_name == this.parentForm['kelas'].value) {
          this.idKelas = el._id;
        }
      });
    });

    const parentData: Parent = {
      first_name: this.parentForm['first_name'].value,
      last_name: this.parentForm['last_name'].value,
      gender: this.parentForm['gender'].value,
      date_of_birth: this.parentForm['date_of_birth'].value,
      occupation: this.parentForm['occupation'].value,
      blood_group: this.parentForm['blood_group'].value,
      religion: this.parentForm['religion'].value,
      address: this.parentForm['address'].value,
      phone: this.parentForm['phone'].value,
    };

    this.parentService
      .editParentByHeadmaster(this.idParent, parentData)
      .subscribe((res) => {
        console.log('HASIL EDIT DATA : ', res);
      });
  }

  submitImage() {
    const imageParent = new FormData();
    Object.keys(this.imageForParentForm).map((key) => {
      imageParent.append(key, this.imageForParentForm[key].value);
    });

    console.log('TEST IMAGE : ', imageParent);

    this.parentService
      .editParentImageByHeadmaster(this.idParent, imageParent)
      .subscribe((res) => {
        console.log('Hasil : ', res);
      });
  }

  get parentForm() {
    return this.form.controls;
  }
  get imageForParentForm() {
    return this.formImage.controls;
  }
}