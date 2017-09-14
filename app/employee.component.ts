import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './service/employee.service';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor( private employeeservice: EmployeeService){};
    ngOnInit(){
        this.employees=this.employeeservice.GetList();
    }
}