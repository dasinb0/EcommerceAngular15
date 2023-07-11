import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { LoginComponent } from './pages/login/login.component';
import { BazarComponent } from './pages/bazar/bazar.component';
import { CocinaComponent } from './pages/cocina/cocina.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'bazar', 
    component: BazarComponent 
  },
  { path: 'bazar/cocina', 
  component: CocinaComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
