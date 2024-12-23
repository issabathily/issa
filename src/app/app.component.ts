import {Component, OnInit,Input} from '@angular/core';
import {Fichie} from "../modules/fichie";
import {AppareilComponent} from "./appareil/appareil.component";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone : true ,
    imports: [AppareilComponent, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

     Appareil! :  Fichie
     Appareil2!: Fichie
     Appareil3!: Fichie
     Dates!: Date



 ngOnInit() {
    this.Dates = this.Dates = new Date()
      this.Appareil = new  Fichie("machine a laver ")
     this.Appareil2 = new Fichie(" MicroOnde ")
     this.Appareil3 = new Fichie("Fer a passe ")


 }



}
