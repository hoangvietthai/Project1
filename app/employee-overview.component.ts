import {Component,OnInit,OnDestroy} from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
@Component ({
    selector:'employee-overview-component',
    template: `
      <h3> Employee Component </h3>
    `
})
export class EmployeeOverviewComponent implements OnInit,OnDestroy{
    public parentRouterId: number;
    public sub: Subscription;
    constructor (private router: Router, private activatedRoute: ActivatedRoute)
    {

    }
    ngOnInit(){
      this.sub=this.activatedRoute.parent.params.subscribe(params=> {
          this.parentRouterId=params['id'];
          alert(this.parentRouterId);
      });
    }
    ngOnDestroy(){

    }
}