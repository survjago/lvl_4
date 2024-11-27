import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  public allstudents:any = []
  public currentstudent:any = {}
  public studentIndex = 0
  

  previewImage: string = '' 
  selectedFile: any 

  ngOnInit() {
    this.allstudents = JSON.parse(localStorage.getItem('studentarray')!)
    this.currentstudent = JSON.parse(localStorage.getItem('currentstudent')!)
  }

  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.previewImage = e.target.result; 
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  
  // uploadProfilePicture() {
  //   if (this.selectedFile) {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
        
  //       const profilePicture = e.target.result;

  //       this.allstudents.find((student:any, index:number)=> {if  (student.email === this.currentstudent.email) {
  //         this.studentIndex = index
  //         return true
  //       }
  //       return false 
  //     })

  //     this.allstudents[this.studentIndex].image = profilePicture
  //       localStorage.setItem('studentarray', JSON.stringify(this.allstudents)) 
  //       alert('Profile picture uploaded successfully!');
  //     };

  //     reader.readAsDataURL(this.selectedFile);
  //   }
  // }



  uploadProfilePicture() {
    if (this.selectedFile) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        const profilePicture = e.target.result;
  
        
        const studentIndex = this.allstudents.findIndex((student: any) => student.email === this.currentstudent.email);
  
        if (studentIndex !== -1) {
          
          this.allstudents[studentIndex].image = profilePicture;
  
        
          localStorage.setItem('studentarray', JSON.stringify(this.allstudents));
  
          
          localStorage.setItem('currentstudent', JSON.stringify(this.allstudents[studentIndex]));
  
          alert('Profile picture uploaded successfully!');
        } else {
          alert('Student not found.');
        }
      };
  
      reader.readAsDataURL(this.selectedFile);
    }
  }
  




}
