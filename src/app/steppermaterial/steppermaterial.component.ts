import { Component,inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-steppermaterial',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  templateUrl: './steppermaterial.component.html',
  styleUrl: './steppermaterial.component.css'
})
export class SteppermaterialComponent {

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    lastCtrl: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    
    Home: ['', Validators.required],
    email: ['', Validators.required],
    state: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    
    question: ['', Validators.required],
    Answer: ['', Validators.required],
    password: ['', Validators.required],
    password2:['', Validators.required],
        



  })

  isLinear = false;
  send(){
    const combinedData = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value
    };
    console.log(combinedData);
  }

}
