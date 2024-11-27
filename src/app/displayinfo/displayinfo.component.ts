import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { ViewdisplayComponent } from '../viewdisplay/viewdisplay.component';
import { BehavioursubService } from '../services/behavioursub.service';

@Component({
  selector: 'app-displayinfo',
  standalone: true,
  imports: [CommonModule, ViewdisplayComponent],
  templateUrl: './displayinfo.component.html',
  styleUrl: './displayinfo.component.css'
})
export class DisplayinfoComponent {
  public data:any = {}
  constructor (public displayInfo:UserserviceService, public behaviour : BehavioursubService) {}


  ngOnInit (){
    console.log(this.displayInfo.storeddata)
  }

  run(infoDisplay:any) {
    console.log(infoDisplay)
    this.data = infoDisplay
    this.behaviour.disp.next(this.data)

    
  }

}
