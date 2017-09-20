import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { EmployeeService } from './service/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { notFoundComponent } from './notFoundComponent.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    notFoundComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }