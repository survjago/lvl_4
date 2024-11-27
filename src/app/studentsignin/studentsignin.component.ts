import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentsignin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './studentsignin.component.html',
  styleUrls: ['./studentsignin.component.css']
})
export class StudentsigninComponent {
  constructor(public router: Router) {}
  
  public email = '';
  public password = '';
  public studentarray: any = [];
  public msg = '';
  public msg2 ='';
  public currentstudent: any;

  ngOnInit() {
    
    this.studentarray = JSON.parse(localStorage.getItem('studentarray')!);
    console.log(localStorage['studentarray']);
  }

  signin() {
    
    let student = this.studentarray.find((student: any) => student.email === this.email && student.password === this.password);
    
    if (student) {
      
      localStorage.setItem('currentstudent', JSON.stringify(student));
      this.router.navigate(['studentdashboard']); 
      alert ('login successfull')
      
      // console.log(student);
    } else {
      this.msg = 'Invalid email or password';
    }
  }
}
