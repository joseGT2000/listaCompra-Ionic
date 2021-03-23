import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ListaCompraService } from '../lista/lista-compra.service';
import { Lista } from '../lista/lista.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista: Lista[];
  imgPrin = 'https://previews.123rf.com/images/macrovector/macrovector1707/macrovector170700475/82444725-verduras-compras-concepto-realista-con-carrito-de-la-compra-y-mercanc%C3%ADas-ilustraci%C3%B3n-vectorial.jpg'

  constructor(private menu: MenuController, private listaService: ListaCompraService) {
    this.lista = [];
  }

  ngOnInit() {
    this.lista = this.listaService.getProductos();
  }

  ionViewWillEnter(){
    this.lista = this.listaService.getProductos();
  }
  
}
