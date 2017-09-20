import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component ({
    selector:'home-component',
    template: `
      <h1> My name is Thai </h1>
      <button (click)="goToEmployee()" >Go To Employees</button>
    `
})
export class HomeComponent{
   constructor (private router: Router)
   {

   };
   goToEmployee()
   {
       this.router.navigate (['employees']); 
   }

}