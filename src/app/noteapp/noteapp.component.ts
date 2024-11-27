import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { title } from 'process';

@Component({
  selector: 'app-noteapp',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './noteapp.component.html',
  styleUrl: './noteapp.component.css'
})
export class NoteappComponent {
  public array:string=''
  public dataarray:(any)[]=[]
  public editingIndex: number | null = null;




  noteone:FormGroup;
  constructor(public builder:FormBuilder , public route: Router){
    this.noteone=this.builder.group({
      ntitle:'',
      nnote:'',
      
    })


    const storeddata = localStorage.getItem('data')
    if (storeddata) {
      this.dataarray = JSON.parse(storeddata)
    }
  }

  
  reactive(event: Event){
    console.log(this.noteone.value);
    console.log(this.noteone.value['ntitle']);
    this.dataarray.push(this.noteone.value);
    localStorage.setItem('data',JSON.stringify(this.dataarray));
    this.noteone.reset();

    if (this.editingIndex !== null) {
      // Edit mode: Update the existing note
      this.dataarray[this.editingIndex] = this.noteone.value;
      this.editingIndex = null; // Reset edit mode
    }
    //  else {
    //   // Add mode: Push new note
    //   this.dataarray.push(this.noteone.value);
    // }
    
    localStorage.setItem('data', JSON.stringify(this.dataarray)); // Update localStorage
    this.noteone.reset();
    


}
ngfor(){
  this.dataarray=JSON.parse(localStorage.getItem('data')||'[]');
  // console.log(this.array);
}

view(i:number) {
  this.route.navigate([`/noteapp/${i}`]);
}



delete(index: number) {
  this.dataarray.splice(index, 1); // Remove the note from the array
  localStorage.setItem('data', JSON.stringify(this.dataarray)); // Update localStorage
}

edit(index: number) {
  this.editingIndex = index; // Set index of note to edit
  this.noteone.patchValue(this.dataarray[index]); // Load note data into form
}

}
