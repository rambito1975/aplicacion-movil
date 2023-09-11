import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina5PageRoutingModule } from './pagina5-routing.module';

import { Pagina5Page } from './pagina5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina5PageRoutingModule
  ],
  declarations: [Pagina5Page]
})
export class Pagina5PageModule {}
