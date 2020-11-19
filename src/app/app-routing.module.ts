import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ClientsListComponent} from './components/clients-list/clients-list.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {AddClientComponent } from './components/add-client/add-client.component';
import {ViewComponent } from './components/view/view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: ClientsListComponent },
  { path: '', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddClientComponent},
  { path: 'addproduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'view/:id', component: ViewComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: "" , component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
