import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddLocalComponent } from './add-local/add-local.component';
import { AddResponsableComponent } from './add-responsable/add-responsable.component';
import { ListSuperviseurComponent } from './list-superviseur/list-superviseur.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { ListResponsableComponent } from './list-responsable/list-responsable.component';
import { ListLocalComponent } from './list-local/list-local.component';
import { ListPaysComponent } from './list-pays/list-pays.component';
import { ListFileComponent } from './list-file/list-file.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'user/addUser',
    component: AddUserComponent,
    data: {
      title: 'Add user Page',
    },
  },
  {
    path: 'user',
    component: ListSuperviseurComponent,
    data: {
      title: 'List user',
    },
  },
  {
    path: 'local/addLocal',
    component: AddLocalComponent,
    data: {
      title: 'Add local Page',
    },
  },
  {
    path: 'local/Listlocal',
    component: ListLocalComponent,
    data: {
      title: 'List localPage',
    },
  },
  {
    path: 'responsable/addResponsable',
    component: AddResponsableComponent,
    data: {
      title: 'Add responsablePage',
    },
  },
  {
    path: 'responsable/listResponsable',
    component: ListResponsableComponent,
    data: {
      title: 'list responsablePage',
    },
  },
  {
    path: 'pays/addPays',
    component: AddPaysComponent,
    data: {
      title: 'Add paysPage',
    },
  },
  {
    path: 'pays/ListPays',
    component: ListPaysComponent,
    data: {
      title: 'List paysPage',
    },
  },
  {
    path: 'file/listfile',
    component: ListFileComponent,
    data: {
      title: 'List file',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
