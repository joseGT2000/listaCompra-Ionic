import { Injectable } from '@angular/core';
import { Lista } from './lista.model'

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {

  productos: Lista[]  = [
    {
      id: '1',
      nombreProducto: 'Pan',
      imgProducto: 'https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg',
      cantidad: 1,
      departamento: 'comida'
    },
    {
      id: '2',
      nombreProducto: 'Quitagrasas',
      imgProducto: 'https://limpiezadirecta.com/209-large_default/quitagrasas-zorka-750-ml-pulverizador-caja-12-unidades.jpg',
      cantidad: 2,
      departamento: 'limpieza_hogar'
    },
    {
      id: '3',
      nombreProducto: 'Zanahoria',
      imgProducto: 'https://soycomocomo.es/media/2019/03/zanahorias.jpg',
      cantidad: 3,
      departamento: 'verduleria'
    }
  ];

  listaCompra: Lista[] = [
    {
      id: '1',
      nombreProducto: 'Zanahoria',
      imgProducto: 'https://soycomocomo.es/media/2019/03/zanahorias.jpg',
      cantidad: 3,
      departamento: 'verduleria'
    },
    {
      id: '2',
      nombreProducto: 'Patatas',
      imgProducto: 'https://i.blogs.es/a696c0/istock-170187164/450_1000.jpg',
      cantidad: 2,
      departamento: 'verduleria'
    },
    {
      id: '3',
      nombreProducto: 'Agua',
      imgProducto: 'https://espaciohumano.com/wp-content/uploads/2018/05/Agua-embotellada.jpg',
      cantidad: 5,
      departamento: 'bebida'
    }
  ]
  constructor() {
   }

  getProductos() {
    return [...this.listaCompra]
  }

  getProducto(id: string){
    return{ 
        ...this.listaCompra.find(place => {
        return place.id === id
      })
    }
  }

  addPlace(nombreProducto: string, imgProducto: string, cantidad: number, departamento: string) {
    this.listaCompra.push({
      id : (this.listaCompra.length+1).toString(),
      nombreProducto,
      imgProducto,
      cantidad,
      departamento
    });
  }

  deletePlace(nombreProducto: string) {
    this.listaCompra = this.listaCompra.filter(place => {
      return place.nombreProducto !== nombreProducto
    })
  }

  añadirCompra(id: string){
    var aux = true;
    for(let producto of this.productos){
      if(producto.id === id){
        for(let añadir of this.listaCompra){
          if(producto.nombreProducto === añadir.nombreProducto){
            this.productos[Number(añadir.id)-1].cantidad += producto.cantidad;
            aux = false;
          }
        }
        if(aux){
          this.listaCompra.push({
            id: (this.productos.length+1).toString(),
            nombreProducto: producto.nombreProducto,
            imgProducto: producto.imgProducto,
            cantidad: producto.cantidad,
            departamento: producto.departamento
          });
        }
      }
    }
    if(this.productos.length > 0){
    this.productos = this.productos.filter(prod => {
      return prod.id !== id
    })
    }
    else 
      this.productos = null;
  }

  comprar(id: string){
    var aux = true;
    for(let lista of this.listaCompra){
      if(lista.id === id){
        for(let compra of this.productos){
          if(lista.nombreProducto === compra.nombreProducto){
            this.productos[Number(compra.id)-1].cantidad += lista.cantidad;
            aux = false;
          }
        }  
        if(aux){
          this.productos.push({
            id: (this.productos.length+1).toString(),
            nombreProducto: lista.nombreProducto,
            imgProducto: lista.imgProducto,
            cantidad: lista.cantidad,
            departamento: lista.departamento
          });
        }
      }
    }
    if(this.listaCompra.length > 0){
    this.listaCompra = this.listaCompra.filter(list => {
      return list.id !== id
    })
    }
    else 
      this.listaCompra = null;
  }

  getProductoC(productoId: string) {
    return {
      ...this.productos.find(producto => {
        return producto.id === productoId
      })
    }
  }

  getProductosC() {
    return [...this.productos]
  }

  addProducto(nombreProducto: string, imgProducto: string, cantidad: number, departamento: string) {
    this.productos.push({
      id : (this.listaCompra.length+1).toString(),
      nombreProducto,
      imgProducto,
      cantidad,
      departamento
    });
  }

  bajarCantidadProducto(productoId: string) {
    this.productos[Number(productoId)-1].cantidad--;
  }

  subirCantidadProducto(productoId: string) {
    this.productos[Number(productoId)-1].cantidad++;
  }

  getCantidadProducto(productoId: string){
    return this.productos[Number(productoId)-1].cantidad;
  }

  eliminarProducto(productoId: string) {
    this.productos = this.productos.filter(producto => {
      return producto.id !== productoId
    })
  }
}
