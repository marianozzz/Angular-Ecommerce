import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ClientsListComponent} from './components/clients-list/clients-list.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {AddClientComponent } from './components/add-client/add-client.component';
import {ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: 'clients', component: ClientsListComponent },
  { path: '', component: ProductsListComponent },
  { path: 'add', component: AddClientComponent},
  { path: 'view/:id', component: ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
