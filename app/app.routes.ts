import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { notFoundComponent } from './notFoundComponent.component';
import { employeeDetailComponent } from './employee-detail.component';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail/:id', component: employeeDetailComponent },
    { path: '**', component: notFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);