import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
  constructor (public router:Router){}

  public fullname: string = '';
  public email: string = '';
  public password: string = '';
  public phonenumber: string = '';
  public selectedClass: string = '';
  public department: string = '';
  public gender: string = '';
  public dob: string = '';
  public studentArray: any[] = [];
  public showDepartment: boolean = false;
  public image:any


  ngOnInit(){
    if (localStorage['studentarray']){
      this.studentArray=JSON.parse(localStorage.getItem('studentarray')!)

      // console.log('dfgggggggg');
      
      
    }
  }


  onClassChange() {
    
    this.showDepartment = ['SS1', 'SS2', 'SS3'].includes(this.selectedClass);
  }




  signup(){
    let studentobj={
      fullname: this.fullname,
      email: this.email,
      password: this.password,
      phone: this.phonenumber,
      class: this.selectedClass,
      department: this.department,
      gender: this.gender,
      dob: this.dob,
      image:this.image

    }

    console.log(studentobj);
    this.studentArray.push(studentobj)
    localStorage.setItem('studentarray',JSON.stringify(this.studentArray))
    this.router.navigate(['/studentsignin'])
    alert ('signup successfull')

    
  }

}
