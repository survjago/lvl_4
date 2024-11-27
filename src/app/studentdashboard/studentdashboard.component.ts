import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-studentdashboard',
  standalone: true,  
  imports: [CommonModule,RouterLink],  
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent {

  public currentuser: any = {};  

  constructor(private router: Router) {}  

  ngOnInit() {
    this.currentuser = JSON.parse(localStorage.getItem('currentstudent')!);
    console.log(this.currentuser.fullname);   
  }

  onProfilePictureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.currentuser.profilePicture = e.target.result;
        localStorage.setItem('currentstudent', JSON.stringify(this.currentuser));
      };

      reader.readAsDataURL(file);
    }
  }

  // onProfilePictureChange(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files[0]) {
  //     const file = input.files[0];
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       // Save the uploaded image to the correct property
  //       this.currentuser.image = e.target.result;
  
  //       // Update local storage
  //       localStorage.setItem('currentstudent', JSON.stringify(this.currentuser));
  //     };
  
  //     reader.readAsDataURL(file);
  //   }
  // }





  goToProfile() {
    console.log('Profile picture clicked!');
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('currentstudent');
    console.log('User logged out.');
    this.router.navigate(['/studentsignin']);
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']); 
  }
}
