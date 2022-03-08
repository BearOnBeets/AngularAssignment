import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:'posts', component: TablesComponent },
  {path:'form', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [TablesComponent,FormsComponent]
