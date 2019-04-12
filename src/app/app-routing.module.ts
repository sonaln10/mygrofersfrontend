import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from './components/cart/cart.component';
import { AlwaysAuthGuard } from './classes/always-auth-guard';



const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path:'home', component: HomeComponent, canActivate: [AlwaysAuthGuard]},
   {path:'mycart', component: CartComponent },
   { path: '', 
    redirectTo: 'login',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AlwaysAuthGuard]
})
export class AppRoutingModule { }
