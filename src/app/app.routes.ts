import { Routes } from '@angular/router';
import path from 'path';

import { ContactAppComponent } from './contact-app/contact-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { profile } from 'console';
import { ProfileComponent } from './profile/profile.component';
import { Component } from '@angular/core';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { onErrorResumeNext } from 'rxjs';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactappeditComponent } from './contactappedit/contactappedit.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { ParentbehavioursubComponent } from './parentbehavioursub/parentbehavioursub.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NoteappComponent } from './noteapp/noteapp.component';
import { ViewnoteappComponent } from './viewnoteapp/viewnoteapp.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { StudentsigninComponent } from './studentsignin/studentsignin.component';
import { studentGuard } from './guards/student.guard';
import { EventparentComponent } from './eventparent/eventparent.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ViewclassmateComponent } from './viewclassmate/viewclassmate.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegistercoursesComponent } from './registercourses/registercourses.component';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { SteppermaterialComponent } from './steppermaterial/steppermaterial.component';

export const routes: Routes = [
    {path:'', component:LandingpageComponent},
    {path:'landing', component:LandingpageComponent},
    {path:'contact', component:ContactAppComponent},
    {path:'home', redirectTo:'contact',pathMatch:'full'},
    {path: 'behaviour',component:ParentbehavioursubComponent},
    {path:'templatevalidate',component:TemplatevalidationComponent},
    {path: 'reactiveform', component:ReactiveformComponent},
    {path:'studentdashboard',component:StudentdashboardComponent, canActivate: [studentGuard]},
    {path:'studentsignup' , component:StudentsignupComponent},
    {path:'eventparent' , component:EventparentComponent},
    { path: 'profile', component: ProfileComponent,canActivate: [studentGuard] },
    {path: 'classmates', component: ViewclassmateComponent, canActivate: [studentGuard]},

    {path: 'forgotpassword', component:ForgotpasswordComponent},
    {path:'reset-password', component:ResetpasswordComponent,canActivate: [studentGuard] },
    {path: 'register-courses', component: RegistercoursesComponent},
    {path: 'pipe', component:PipecomponentComponent},
    {path:'material', component:AngularmaterialComponent},
    {path: 'stepper', component:SteppermaterialComponent},
    


    {path:'studentsignin', children:[
        {path:'', component:StudentsigninComponent},
        
    ]},
    


    
    
    {path: 'noteapp', children:[
        {path:'', component:NoteappComponent},
        {path:':id', component:ViewnoteappComponent},
      
    ]},

    {path:'dashboard',children:[
        
        
            {path:'', component:ProfileComponent},
            {path:'updateprofile',component:UpdateprofileComponent},
        

]},
    
    {path:'contact', children:[
        {path:'', component:ContactAppComponent},
        // {path:'edit',component:EditComponent},
        {path:'view',component:ViewcontactComponent},
        {path:'edit/:index',component:ContacteditComponent},
        {path:'displayinfo', component:DisplayinfoComponent},
    ]},
    
    {path:'**', component:ErrorpageComponent}
];
