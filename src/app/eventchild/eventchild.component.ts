import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
  @Input () sendMsg=''
  public msgToparent=''
  @Output() eventemit=new EventEmitter

  send(){
    this.eventemit.emit(this.msgToparent)
  }


}
