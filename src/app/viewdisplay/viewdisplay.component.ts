import { Component } from '@angular/core';
import { BehavioursubService } from '../services/behavioursub.service';

@Component({
  selector: 'app-viewdisplay',
  standalone: true,
  imports: [],
  templateUrl: './viewdisplay.component.html',
  styleUrl: './viewdisplay.component.css'
})
export class ViewdisplayComponent {


  constructor(public behaviour : BehavioursubService) {}
public classwork:any = {}

ngOnInit() {
  this.behaviour.disp.subscribe(res => {
    console.log(res);
    this.classwork = res

    
  })
}



}
