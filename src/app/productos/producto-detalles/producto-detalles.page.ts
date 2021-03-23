import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListaCompraService } from 'src/app/lista/lista-compra.service';
import { Lista } from 'src/app/lista/lista.model';


@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.page.html',
  styleUrls: ['./producto-detalles.page.scss'],
})
export class ProductoDetallesPage implements OnInit {

  producto: Lista;
  productos: Lista[];

  constructor(private activatedRoute: ActivatedRoute, private listaService: ListaCompraService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap. subscribe(paramMap => {
      const recipeId = paramMap.get('id');
      this.producto = this.listaService.getProductoC(recipeId);
    })
  }
  private increment (productoId: string) {
    this.listaService.subirCantidadProducto(productoId);
    this.producto.cantidad=this.listaService.getCantidadProducto(productoId);
  }

  private decrement (productoId: string) {
    if(this.producto.cantidad==1){
      console.log(this.producto.cantidad)
      this.showAlert();
    }else{
      this.listaService.bajarCantidadProducto(productoId);
      this.producto.cantidad=this.listaService.getCantidadProducto(productoId);
    }

  }

  showAlert() {
      this.alertCtrl.create({
        header: 'Quieres eliminar el producto?',
        message: 'Cuidado, si lo eliminas tendrás que volver a añadir los datos en un futuro',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar'
          },
          {
            text: 'Eliminar',
            handler: () => {
              this.listaService.eliminarProducto(this.producto.id);
              this.router.navigate(['/productos']);
            }
          },
          {
            text: 'Eliminar y añadir a la compra',
            handler: () => {
              this.listaService.añadirCompra(this.producto.id);
              this.router.navigate(['/productos']);
            }
          }
        ]
      }).then(res => {
        res.present();
      });
  }
}
