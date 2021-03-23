import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ListaCompraService } from '../lista/lista-compra.service';
import { Lista } from '../lista/lista.model';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage implements OnInit {

  lista: Lista[];

  constructor(private menu: MenuController, private listaService: ListaCompraService, private router: Router) {
    this.lista = [];
   }

   ngOnInit() {
    this.lista = this.listaService.getProductos();
  }

  ionViewWillEnter(){
    this.lista = this.listaService.getProductos();
  }

  addNuevoProducto(){
    this.router.navigate(['/add-producto']);
  }
  
  comprar(id: string){
    this.listaService.comprar(id);
    this.lista = this.listaService.getProductos();
  }

}
