import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form!: FormGroup;
  genderType?:string;
  imageDisplay?: string | ArrayBuffer | undefined;
  constructor(private  formbBuilder: FormBuilder, private studentService:StudentService) { }

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
      image : ['', Validators.required],
      year_academic : ['', Validators.required],
    })
  }


  submitData(){

    const studentData = new FormData();
    Object.keys(this.studentForm).map((key)=>{
      studentData.append(key, this.studentForm[key].value)
    })
     this.studentService.AddStudent(studentData).subscribe((res)=>{
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
  get studentForm(){
    return this.form?.controls;
  }
}

