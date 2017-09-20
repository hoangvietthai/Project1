import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { notFoundComponent } from './notFoundComponent.component';
const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: '**', component: notFoundComponent }
]
export const appRoutes = RouterModule.forRoot(routing);