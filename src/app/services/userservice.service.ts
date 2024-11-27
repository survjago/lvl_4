import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  public msg='I am ging to the market'
  public lastname='owolabi'
  public firstname='oyindamola'
  public age='12'

public itemsArray=[

  { 
    product: 'shoe',
    color:'purple'
  },

{
  product: 'bag',
  color:'black'
},

{
  product: 'jacket',
  color:'blue'
},

{
  product: 'kicks',
   color:'black'
},

{
  product: 'car',
   color:'black'
},
{
  product: 'phone',
   color:'blue'
},
{
  product: 'box',
   color:'red'
},


]

public getitemArr(){

  return this.itemsArray
}



// public storeddata = localStorage.getItem('information')
public storeddata = JSON.parse(localStorage.getItem('information') || "[]")



}
