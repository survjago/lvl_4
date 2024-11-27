import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { log } from 'console';


interface buyer {
  Firstname: string;
  Lastname:string;
  Email:string;
  Phonenumber:string;
}

@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {
  public firstname:string=''
  public lastname:string=''
  public email:string=''
  public phonenumber:string=''

  public Buyers:buyer[] = []


  constructor(public route:Router) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storeddata = localStorage.getItem('information')
      if (storeddata) {
        this.Buyers = JSON.parse(storeddata)
      }
    }
  
  }
  



  create(){
    //alert (this.firstname)
    let contactobjb={
      Firstname:this.firstname,
      Lastname:this.lastname,
      Email:this.email,
      Phonenumber:this.phonenumber,
    }

    this.Buyers.push(contactobjb)
  
    localStorage.setItem('information', JSON.stringify(this.Buyers))
     this.firstname = ''
     this.lastname = ''
     this.email = ''
     this.phonenumber = ''

   
  }

  check(index:number){
    this.route.navigate([`/contact/edit/${index}`])
  }


delete(index:number) {
  this.Buyers.splice(index, 1)
  localStorage.setItem('information', JSON.stringify(this.Buyers))
}

viewcontact(index:number) {
  localStorage.setItem('viewobject', JSON.stringify(this.Buyers[index]))
  console.log(localStorage['viewobject']);
  

}
  
}


