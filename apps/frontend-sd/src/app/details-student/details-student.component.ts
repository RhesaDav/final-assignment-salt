import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';


// a
@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css'],
})
export class DetailsStudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  studentData: Student = {
    _id: '',
    first_name: '',
    last_name: '',
    gender: '',
    father_name: '',
    mother_name: '',
    date_of_birth: '',
    father_occupation: '',
    blood_group: '',
    religion: '',
    email: '',
    year_academic: '',
    addmission_date: '',
    kelas: {
      _id: '',
      class_name: '',
      teacher: {
        _id: '',
        first_name: '',
        last_name: '',
        email: '',
        short_bio: '',
      },
      subject: [
        {
          _id: '',
          subject_name: '',
          teacher_id: {
            _id: '',
            first_name: '',
            last_name: '',
            email: '',
            short_bio: '',
            id: '',
          },
          duration: '',
          id: '',
        },
      ],
      
    },
    address: '',
    phone: '',
    password: '',
    short_bio: '',
    image: '',
    role: '',
    status: '',
    subject: [
      {
        subject_name: {
          _id: '',
          subject_name: '',
          teacher_id: '',
          duration: '',
          id: '',
        },
        score_subject: '',
      },
    ],
    id: '',
  };

  idStudent: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = [params['idStudent']];
      console.log('id student :', this.idStudent[0]);
    });
    this.studentService.getStudentById(this.idStudent[0]).subscribe((hasil) => {
      this.studentData = hasil;
      console.log('hasil :', hasil);
    });
  }
}
