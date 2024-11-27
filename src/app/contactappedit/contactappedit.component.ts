import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactappedit',
  standalone: true,
  imports: [],
  templateUrl: './contactappedit.component.html',
  styleUrl: './contactappedit.component.css'
})
export class ContactappeditComponent {
  constructor (public activatedroute: ActivatedRoute){}
  public index: number=0
  
  
  ngOnInit(){
    this.index = this.activatedroute.snapshot.params['index']
      console.log(this.index);
      
    
  }
  
}
