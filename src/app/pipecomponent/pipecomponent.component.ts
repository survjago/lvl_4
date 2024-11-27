import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipecomponent.component.html',
  styleUrl: './pipecomponent.component.css'
})
export class PipecomponentComponent {
  public time = new Date()

}
