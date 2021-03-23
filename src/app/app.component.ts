import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  goMenu(){
    this.router.navigate(['/menu-sem']);
    
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goHogar(){
    this.router.navigate(['/productos']);
  }

  goLista(){
    this.router.navigate(['/lista-compra']);
  }
}
