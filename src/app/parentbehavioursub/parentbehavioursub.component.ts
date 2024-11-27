import { Component } from '@angular/core';
import { ChildbehavioursubComponent } from '../childbehavioursub/childbehavioursub.component';
import { FormsModule } from '@angular/forms';
import { BehavioursubService } from '../services/behavioursub.service';

@Component({
  selector: 'app-parentbehavioursub',
  standalone: true,
  imports: [ChildbehavioursubComponent,FormsModule],
  templateUrl: './parentbehavioursub.component.html',
  styleUrl: './parentbehavioursub.component.css'
})
export class ParentbehavioursubComponent {
  public msg ='oladele'
  constructor (public behaviorsub:BehavioursubService) {}


  upd(){
    console.log(this.msg);
    this.behaviorsub.behaviour.next(this.msg)
    
  }

}
