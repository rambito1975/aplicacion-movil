import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina1PageRoutingModule } from './pagina1-routing.module';

import { Pagina1Page } from './pagina1.page';
import { ComponentsModule } from 'src/app/components/components.module';

import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina1PageRoutingModule,
    ComponentsModule,
  ],
  providers: [ BarcodeScanner],
  declarations: [Pagina1Page]
  
})
export class Pagina1PageModule {}
