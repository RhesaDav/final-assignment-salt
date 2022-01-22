import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddParentComponent } from './add-parent/add-parent.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { ChartdoughnutComponent } from './_shared/chartdoughnut/chartdoughnut.component';
import { ChartbarComponent } from './_shared/chartbar/chartbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { DetailsTeacherComponent } from './details-teacher/details-teacher.component';
import { DetailsParentComponent } from './details-parent/details-parent.component';
import { ClassComponent } from './class/class.component';
import { AddClassComponent } from './add-class/add-class.component';
import { SubjectComponent } from './subject/subject.component';
import { AddScheduleComponent } from './schedule/add-schedule/add-schedule.component';
import { InfoComponent } from './schedule/info/info.component';
import { CalendarComponent } from './schedule/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { EditParentComponent } from './edit-parent/edit-parent.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { AcademicYearComponent } from './academic-year/academic-year.component';
import { StudentByClassComponent } from './student-by-class/student-by-class.component';
import { ClassByScoreComponent } from './class-by-score/class-by-score.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addparent', component: AddParentComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'addteacher', component: AddTeacherComponent },
  { path: 'addclass', component: AddClassComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'class', component: ClassComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'studentdetails/:idStudent', component: DetailsStudentComponent },
  { path: 'studentedit/:idStudent', component: EditStudentComponent },
  { path: 'teacherdetails', component: DetailsTeacherComponent },
  { path: 'studentedit/:idTeacher', component: EditTeacherComponent },
  { path: 'parentdetails', component: DetailsParentComponent },
  { path: 'parentedit/:idParent', component: EditParentComponent },
  { path: 'subject/:idSubject', component: EditSubjectComponent },
  { path: 'schedule', component: CalendarComponent },
  { path: 'academicyear', component:AcademicYearComponent},

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AddStudentComponent,
    AddTeacherComponent,
    AddParentComponent,
    ParentComponent,
    StudentComponent,
    TeacherComponent,
    DashboardComponent,
    NotfoundComponent,
    SidebarComponent,
    ChartdoughnutComponent,
    ChartbarComponent,
    DetailsStudentComponent,
    DetailsTeacherComponent,
    DetailsParentComponent,
    ClassComponent,
    AddClassComponent,
    SubjectComponent,
    AddScheduleComponent,
    InfoComponent,
    CalendarComponent,
    EditStudentComponent,
    EditTeacherComponent,
    EditParentComponent,
    EditSubjectComponent,
    AcademicYearComponent,
    StudentByClassComponent,
    ClassByScoreComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
