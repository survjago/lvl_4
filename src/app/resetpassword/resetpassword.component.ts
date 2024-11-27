import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.newPassword === this.confirmPassword) {
      
      const currentUser = JSON.parse(localStorage.getItem('currentstudent')!);

      if (currentUser) {
        
        
        currentUser.password = this.newPassword;

        
        localStorage.setItem('currentstudent', JSON.stringify(currentUser));

        
        let studentArray = JSON.parse(localStorage.getItem('studentarray')!);

        if (studentArray) {
          const index = studentArray.findIndex((student: any) => student.email === currentUser.email);
          if (index !== -1) {
            
            studentArray[index].password = this.newPassword;
            localStorage.setItem('studentarray', JSON.stringify(studentArray)); 
          }
        }
        alert('Password successfully updated!')
        // console.log('Password successfully updated to:', this.newPassword);
        // this.router.navigate(['/studentsignin']);
      } else {
        alert('No user found in local storage!');
      }
    } else {
      alert('Passwords do not match. Please try again.');
    }
  }
}
