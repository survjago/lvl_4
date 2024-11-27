import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubService {

  constructor() { }
  public behaviour =new BehaviorSubject('oyindamola')

  public disp = new BehaviorSubject({
    Firstname: 'No name yet',
    Lastname: 'No name yet',
    Email: 'No email yet',
    Phonenumber: 'No number yet'
  }) 
}
