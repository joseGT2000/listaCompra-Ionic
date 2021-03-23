import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCompraService } from 'src/app/lista/lista-compra.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {

  constructor(private listaService: ListaCompraService, private router: Router) { }

  ngOnInit() {
  }
  save(nombreProducto:  HTMLInputElement, imgProducto:  HTMLInputElement, cantidad:  HTMLInputElement,departamento:  HTMLInputElement){
    this.listaService.addPlace(nombreProducto.value, imgProducto.value, cantidad.valueAsNumber, departamento.value);
    this.router.navigate(['/lista-compra']);
  }

}
