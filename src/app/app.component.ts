import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

interface obj1{

  level:[{class4:string,
    laptop:string,
    course:string,}
    
  ],
  equipment:[{
    wooden:string,
    metal:string,
    internet:string,}
    
  ],


  set:string
}

interface obj{
  fullname:string
  phonenumber:string
  state:string
  email:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactAppComponent,LandingpageComponent,ErrorpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstclass';


  public phonenumber:any=''

  //union,interface, infrence


  public address:undefined|string|number
  public firstname = 'Hamzat'
  public age=90
  public bool = true


  public arrayone:(number|string|boolean|obj)[]=[1,2,'Lagos',true,'ikoyi',77,

   { fullname:"Hamzat Abdulrahman",
    phonenumber:"7027729330",
    state:'Lagos',
    email:'ayobami@email.com',
   }
  ]


 



  //without using interface
  public objone:{
    name:string,
    age:number,
    address:string,
    Color:string
  }={
    name:'Daniel',
    age:56,
    address:'Lagos',
    Color:'red'
  }

  //with interface

  public objtwo:obj={
    fullname:"Hamzat Abdulrahman",
    phonenumber:"7027729330",
    state:'Lagos',
    email:'ayobami@email.com',
  }



  public stundentinfo:obj1={

    level:[{class4:'Angular & php',
      laptop:'Hp',
      course:'SQL & PHP',}
      
    ],
    equipment:[{
      wooden:'table',
      metal:'chair',
      internet:'airtel',
    }
      
    ],
   set:'2023/2024'
  }


  
  

  public lastname:string|number = 60
  public check:boolean= true


  signup(){
    this.address='ogbomoso'
    this.lastname=89
    this.check=false
    this.lastname=''
    
  }
}

