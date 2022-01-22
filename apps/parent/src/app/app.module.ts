import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { LoginComponent } from './login/login.component';
import { ScoreInfoComponent } from './score-info/score-info.component';
import { InfoComponent } from './_shared/info/info.component';
import { CalendarComponent } from './_shared/calendar/calendar.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { DetailProfileComponent } from './profile/detail-profile/detail-profile.component';
import { ShellComponent } from './_shared/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'detail-profile',
        component: DetailProfileComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
      {
        path: 'score-info/:idStudent',
        component: ScoreInfoComponent,
      },
      {
        path: 'detail-student/:idStudent',
        component: DetailStudentComponent,
      },
    ],
  },
];

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, SidebarComponent, DetailStudentComponent, LoginComponent, ScoreInfoComponent, InfoComponent, CalendarComponent, EditProfileComponent, DetailProfileComponent, ShellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule,
    NgxSpinnerModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
