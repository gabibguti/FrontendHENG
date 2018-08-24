import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApiserviceComponent} from './APIService/apiservice.component';

const routes: Routes = [
  { path: '', redirectTo: '/maintest', pathMatch: 'full' },
  { path: 'maintest',  component: ApiserviceComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
