import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApiserviceComponent } from './apiservice.component';

@NgModule({
  declarations: [
    ApiserviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ApiserviceComponent]
})
export class ApiserviceModule { }
