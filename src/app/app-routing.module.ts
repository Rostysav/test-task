import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './pages/login-form/login-form.component';
import {ListComponent} from './pages/list/list.component';
import {FormComponent} from './pages/form/form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'list', component: ListComponent},
  { path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
