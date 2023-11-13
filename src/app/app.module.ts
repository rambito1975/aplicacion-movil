import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//========barcode==============
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

//========= Firebase ==========
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule { }
