import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewclassmate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewclassmate.component.html',
  styleUrl: './viewclassmate.component.css'
})
export class ViewclassmateComponent {

  public classmates: any[] = []; 

  // ngOnInit() {
    
  //   const studentArray = JSON.parse(localStorage.getItem('studentarray') || '[]');
  //   console.log('All Students:', studentArray); 
  
    
  //   const currentStudent = JSON.parse(localStorage.getItem('currentstudent') || '{}');
  //   console.log('Current Student:', currentStudent); 
  
    
  //   this.classmates = studentArray.filter((student: any) => student.email !== currentStudent.email);
  
  //   console.log('Filtered Classmates:', this.classmates); 
  // }



  ngOnInit() {
    // Retrieve all students from localStorage
    const studentArray = JSON.parse(localStorage.getItem('studentarray') || '[]');
    console.log('All Students:', studentArray); 
  
    // Retrieve current student details from localStorage
    const currentStudent = JSON.parse(localStorage.getItem('currentstudent') || '{}');
    console.log('Current Student:', currentStudent); 
  
    // Filter students in the same class, excluding the current student
    this.classmates = studentArray.filter((student: any) => 
      student.class === currentStudent.class && student.email !== currentStudent.email
    );
  
    console.log('Filtered Classmates:', this.classmates); 
  }


}
