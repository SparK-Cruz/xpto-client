import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutletMap } from '@angular/router';

import { Backend } from './backend/backend';
import { AuthGuard } from './backend/auth-guard.service';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customers/customer.module';
import { routing, appRoutingProviders }  from './app.routing';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    CustomerModule,
    RouterModule,
    routing
  ],
  providers: [AuthGuard, Backend, RouterOutletMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
