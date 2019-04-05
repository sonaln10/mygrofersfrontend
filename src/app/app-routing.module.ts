import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path:'home', component: HomeComponent },
   {path:'mycart/:cart', component: CartComponent },
   { path: '', 
    redirectTo: 'login',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
