import { Component,Input, Output, } from '@angular/core';
import { EventchildComponent } from "../eventchild/eventchild.component";
import { FormsModule } from '@angular/forms';
import EventEmitter from 'events';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent, FormsModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
public msgToChild = '';
public msg = '';

  public response=''


  receivemsg(data:any){
    this.response=data
  }

  send(){
    this.msg = this.msgToChild
    this.msgToChild = ''
    
  }
}
