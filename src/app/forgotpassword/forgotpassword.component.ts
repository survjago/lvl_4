import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  emailFound: boolean = false;
  studentArray: any[] = [];
  emailError: string = '';
  passwordError: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.studentArray = JSON.parse(localStorage.getItem('studentarray') || '[]');
  }

  checkEmail() {
    const student = this.studentArray.find(student => student.email === this.email.trim());
    if (student) {
      this.emailFound = true;
      this.emailError = '';
    } else {
      this.emailError = 'Email not found in our records!';
    }
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = 'Passwords do not match!';
      return;
    }

    const studentIndex = this.studentArray.findIndex(student => student.email === this.email.trim());
    if (studentIndex !== -1) {
      this.studentArray[studentIndex].password = this.newPassword;
      localStorage.setItem('studentarray', JSON.stringify(this.studentArray));
      alert('Password reset successfully!');
      this.router.navigate(['/studentsignin']);
    }
  }


}
