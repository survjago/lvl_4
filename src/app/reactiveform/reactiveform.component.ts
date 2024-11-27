import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule
  ],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  formone:FormGroup;
  constructor(public builder:FormBuilder){
    this.formone=this.builder.group({
      fname:['',Validators.minLength(4)],
      lname:['',Validators.minLength(4)],
      pnumber:['',[Validators.minLength(10),Validators.required]],
      email:['',Validators.required],
      age:['', Validators.min(18)],
      // cbox:[false]
      cbox:false
    })
  }
  reactive(){
    console.log(this.formone.value);
    console.log(this.formone.value['email']);
    
    
  }


}
