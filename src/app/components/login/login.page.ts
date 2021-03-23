import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private user : FormGroup;

  //user = new FormGroup({
   // username : new FormControl(''),
   // password : new FormControl(''),
 // });
  constructor(private formBuilder : FormBuilder, private router: Router, public alertController: AlertController) {
    this.user = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', (Validators.required, Validators.minLength(4))],
    });
   }

   onLogin(): boolean{
     if(this.user.value.username == "admin" && this.user.value.password == "admin"){
      this.router.navigate(['/home']);
       return true;
     }else{
       this.presentAlert();
       return false;
     }
   } 

   async presentAlert(){
     const alert = await this.alertController.create({
       header: 'Validación incorrecta',
       message: 'El nombre o la contraseña no son válidos',
       buttons: ['OK']
     });
      await alert.present();
   }

}
