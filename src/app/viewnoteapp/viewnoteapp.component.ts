import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewnoteapp',
  standalone: true,
  imports: [],
  templateUrl: './viewnoteapp.component.html',
  styleUrl: './viewnoteapp.component.css'
})
export class ViewnoteappComponent {

constructor(public activated: ActivatedRoute) {}

public incomingNote:any = localStorage.getItem('data');
public note = JSON.parse(this.incomingNote);
public enote:any;
public noteId:any 


ngOnInit() {
    this.noteId = (this.activated.snapshot.params['id']);
   this.enote=(this.note[this.noteId]);
  
    
}

}
