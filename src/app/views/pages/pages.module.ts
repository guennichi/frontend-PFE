import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { AddLocalComponent } from './add-local/add-local.component';
import { ListSuperviseurComponent } from './list-superviseur/list-superviseur.component';
import { ListResponsableComponent } from './list-responsable/list-responsable.component';
import { ListPaysComponent } from './list-pays/list-pays.component';
import { ListLocalComponent } from './list-local/list-local.component';
import { ListMigrationComponent } from './list-migration/list-migration.component';
import { AddResponsableComponent } from './add-responsable/add-responsable.component';
import { HttpClientModule } from '@angular/common/http';
import { ListFileComponent } from './list-file/list-file.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    AddUserComponent,
    AddPaysComponent,
    AddLocalComponent,
    ListSuperviseurComponent,
    ListResponsableComponent,
    ListPaysComponent,
    ListLocalComponent,
    ListMigrationComponent,
    AddResponsableComponent,
    ListFileComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,





  ]
})
export class PagesModule {
}
