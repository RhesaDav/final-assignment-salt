import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { LoginComponent } from './login/login.component';
import { ScoreInfoComponent } from './score-info/score-info.component';
import { InfoComponent } from './_shared/info/info.component';
import { CalendarComponent } from './_shared/calendar/calendar.component';

const routes : Routes = [
  // {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'profile/:idParent', component:ProfileComponent},
  {path:'dashboard/:idParent', component:DashboardComponent}
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, SidebarComponent, ProfileComponent, DetailStudentComponent, LoginComponent, ScoreInfoComponent, InfoComponent, CalendarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
