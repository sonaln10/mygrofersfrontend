import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from './components/cart/cart.component';
import { AlwaysAuthGuard } from './guards/always-auth-guard';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path:'home', component: HomeComponent 
   //,canActivate: [AlwaysAuthGuard]  
  },
  { path: 'manageProducts', component: ManageProductComponent },
  { path: 'checkout', component: CheckoutComponent},
   {path:'mycart', component: CartComponent },
   {path:'dashboard', component: DashboardComponent },
   { path: '', 
    redirectTo: 'login',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // providers: [AlwaysAuthGuard]
})
export class AppRoutingModule { }
