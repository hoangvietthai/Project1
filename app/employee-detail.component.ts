import {Component,OnInit,OnDestroy} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
@Component ({
    selector:'employee-detail-component',
    templateUrl:'./app/employee-detail.component.html'
})
export class employeeDetailComponent implements OnInit, OnDestroy{
    public _id: number;
    public subscription: any;
   constructor (private router: Router,private activatedRoute:ActivatedRoute)
   {

   };
   ngOnInit()
   {
      this.subscription=this.activatedRoute.params.subscribe(params=>{
          this._id=params['id'];
          alert(this._id);
      })
   }
   goToEmployee()
   {
       this.router.navigate (['employees']); 
   }
   ngOnDestroy()
   { 
         this.subscription.unsubscribe();

   }
}