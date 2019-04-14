import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
//import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HelloComponent } from './components/hello/hello.component';
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { ProductComponent } from "./components/product/product.component";
import { CartComponent } from './components/cart/cart.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    SampleComponent,
    HelloComponent,
    CartComponent,
    ManageProductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // MatSelectModule,
    // MatInputModule,
    // MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
