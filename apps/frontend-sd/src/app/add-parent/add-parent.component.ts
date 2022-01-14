/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../_service/parent.service';

@Component({
  selector: 'app-addparent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {
  form!: FormGroup;
  genderType?:string;
  imageDisplay?: string | ArrayBuffer | undefined;
  constructor(private  formbBuilder: FormBuilder, private parentService:ParentService) { }

  ngOnInit(): void {
    this._formInit()
  }

  private _formInit(){
    this.form = this.formbBuilder.group({
      first_name : ['', Validators.required],
      last_name : ['', Validators.required],
      gender : ['', Validators.required],
      father_name : ['', Validators.required],
      mother_name : ['', Validators.required],
      date_of_birth : ['', Validators.required],
      father_occupation : ['', Validators.required],
      blood_group : ['', Validators.required],
      religion : ['', Validators.required],
      email : ['', Validators.required],
      addmission_date : ['', Validators.required],
      kelas : ['', Validators.required],
      address : ['', Validators.required],
      phone : ['', Validators.required],
      short_bio: ['', Validators.required],
      role : ['', Validators.required],
      image : ['', Validators.required]
    })
  }


  submitData(){
    // const newData = {

    //   first_name : this.form?.value.first_name,
    //   last_name : this.form?.value.last_name,
    //   gender : this.form?.value.gender,
    //   father_name : this.form?.value.father_name,
    //   mother_name : this.form?.value.mother_name,
    //   date_of_birth : this.form?.value.date_of_birth,
    //   father_occupation : this.form?.value.father_occupation,
    //   blood_group : this.form?.value.blood_group,
    //   religion : this.form?.value.religion,
    //   email : this.form?.value.email,
    //   addmission_date : this.form?.value.addmission_date,
    //   kelas : this.form?.value.kelas,
    //   address : this.form?.value.address,
    //   phone : this.form?.value.phone,
    //   short_bio : this.form?.value.short_bio,
    //   role : this.form?.value.role,
    //   image : this.form?.value.image

    // }
    // console.log("DATA : ", newData)
    // this.studentService.AddStudent(newData).subscribe((res)=>{
    //   console.log("Hasil : ", res)
    // })

    const parentData = new FormData();
    Object.keys(this.parentForm).map((key)=>{
      parentData.append(key, this.parentForm[key].value)
    })
     this.parentService.AddParent(parentData).subscribe((res)=>{
      console.log("Hasil : ", res)
    })
  }

  uploadImage(event:any){
    const file = event.target.files[0]
    if(file){
      this.form.patchValue({image : file})
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = ()=>{
        this.imageDisplay = fileReader.result;
      }
      fileReader.readAsDataURL(file)
    }
  }
  get parentForm(){
    return this.form?.controls;
  }
}
