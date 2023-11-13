import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  ngOnInit() {
  }

  //=====Cerrar Sesion =====
  signOut(){
    this.firebaseSvc.signOut();
  }


  //====barcode========

  texto:string=''
  constructor(private barcodescanner:BarcodeScanner) {}
  scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("Scaneando...", barcodedata);
      this.texto=(JSON.stringify(barcodedata));
    }).catch(err=>{
      console.log("ERROR AL ESCANEAR!!!!");
    })

  }


}
