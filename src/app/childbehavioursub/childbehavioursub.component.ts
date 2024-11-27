import { Component } from '@angular/core';
import { BehavioursubService } from '../services/behavioursub.service';

@Component({
  selector: 'app-childbehavioursub',
  standalone: true,
  imports: [],
  templateUrl: './childbehavioursub.component.html',
  styleUrl: './childbehavioursub.component.css'
})
export class ChildbehavioursubComponent {
  constructor (public behavioursub:BehavioursubService){}
  public data=''
  ngOnInit(){
    console.log(this.behavioursub.behaviour);
    this.behavioursub.behaviour.subscribe(data=>{
      console.log(data);
      this.data=data
      
    })
    
  }

}
