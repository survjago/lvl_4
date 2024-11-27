import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registercourses',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registercourses.component.html',
  styleUrl: './registercourses.component.css'
})
export class RegistercoursesComponent {

  public predefinedCourses: string[] = ['MATHEMATICS', 'ENGLISH', 'SOCIAL STUDIES', 'CIVIC EDUCATION', 'BASIC SCIENCE', 'HOME ECONOMICS', 'AGRICULTURAL SCIENCE', 'LITERATURE', 'GOVERNMENT'];
  public availableCourses: string[] = []; // Courses specific to the student's class
  public currentClass: string = '';
  public selectedCourse: string = ''; // Selected course from dropdown
  public allCourses: { [key: string]: string[] } = {
    SS1: [],
    SS2: [],
    SS3: [],
  };

  ngOnInit() {
    // Get the current student's class from localStorage
    const currentStudent = JSON.parse(localStorage.getItem('currentstudent') || '{}');
    this.currentClass = currentStudent.class;

    // Load registered courses for the class
    const savedCourses = JSON.parse(localStorage.getItem('allCourses') || '{}');
    this.allCourses = savedCourses || {};
    this.loadCourses();
  }

  loadCourses() {
    this.availableCourses = this.allCourses[this.currentClass] || [];
  }

  addCourse() {
    if (!this.selectedCourse) {
      alert('Please select a course!');
      return;
    }

    if (!this.availableCourses.includes(this.selectedCourse)) {
      this.availableCourses.push(this.selectedCourse);
      this.saveCourses();
      this.selectedCourse = ''; // Clear the dropdown selection
      alert('Course added successfully!');
    } else {
      alert('This course is already registered!');
    }
  }

  deleteCourse(course: string) {
    this.availableCourses = this.availableCourses.filter((c) => c !== course);
    this.saveCourses();
    alert('Course deleted successfully!');
  }

  saveCourses() {
    this.allCourses[this.currentClass] = this.availableCourses;
    localStorage.setItem('allCourses', JSON.stringify(this.allCourses));
  }

  
}
