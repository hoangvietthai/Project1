import {Injectable} from '@angular/core';
@Injectable()
export class EmployeeService{
    GetList(): any[]{
        let employees[]= [
            { id: 1, name: "Nguyen Van A" },
            { id: 2, name: "Tran Xuan B" },
            { id: 1, name: "Nguyen Van A" },
            { id: 2, name: "Tran Xuan B" }, 
        ];
        return employees;
    }
}