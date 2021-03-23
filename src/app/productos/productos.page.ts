import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCompraService } from '../lista/lista-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos = [];

  constructor(private listaService: ListaCompraService, private router: Router) { }

  ngOnInit() {
    this.productos = this.listaService.getProductosC();
  }

  ionViewWillEnter() {
    this.productos = this.listaService.getProductosC();
  }

  addNuevoProducto(){
    this.router.navigate(['/add-lista']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


}
