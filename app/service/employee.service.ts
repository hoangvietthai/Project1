import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    private apiUrl="http://59ba423436acf20011fe29dd.mockapi.io/api/employees";
    constructor (private _http: Http)
    {

    }
    GetList(): Observable<any[]>{
       return this._http.get(this.apiUrl).map((response: Response)=>response.json());
    }
}