import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCompraService } from 'src/app/lista/lista-compra.service';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.page.html',
  styleUrls: ['./producto-add.page.scss'],
})
export class ProductoAddPage implements OnInit {

  constructor(private listaService: ListaCompraService, private router: Router) { }

  ngOnInit() {
  }

  guardarProducto(nombre: HTMLInputElement, imagen: HTMLInputElement, cantidad: HTMLInputElement, departamento: HTMLInputElement) {
    this.listaService.addProducto(nombre.value, imagen.value, Number(cantidad.value), departamento.value);
    this.router.navigate(['/productos']);
  }

}
