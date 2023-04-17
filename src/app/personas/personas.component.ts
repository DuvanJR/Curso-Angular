import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent {
  deshabilitar = false;
  
  titulo = "";
  A: number = 0;
  B: number = 0;
  resultado: number = 0;

    sumar():void {
    this.resultado = this.A + this.B;    
  }

  

  /*modificarTitulo(event: Event){
    console.log("entrando al metodo cambiar titulo");
    this.titulo = (<HTMLInputElement>event.target).value; 
  }*/
}
