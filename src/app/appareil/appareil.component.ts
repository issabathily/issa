import {Component, OnInit,Input} from '@angular/core';
import {Fichie} from "../../modules/fichie";
import {NgStyle} from "@angular/common";
import {color} from "../../../../../../../B.projects/issa/Lib/site-packages/bokeh/server/static/js/lib/api/plotting";
import {FormsModule} from "@angular/forms";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-appareil',
  standalone : true,
    imports: [
        NgStyle,
        FormsModule
    ],
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.css'
})
export class AppareilComponent  implements  OnInit {
    statu!: string
    cpt!: boolean


    @Input() issa!: Fichie
    ngOnInit() {
        this.statu = "❎"
        this.cpt = false

    }

    vrai() {
        this.statu = "✅"
        this.cpt = true
    }

    faux() {
         this.statu ="❎"
        this.cpt = false
    }

    couleur() {
        if (this.cpt){
            return "rgba(98,229,98,0.16)"
        }
           else {
            return "rgba(169, 68, 68, 0.19) "
        }
    }

    couleurs() {
         if (this.cpt){
             return "green"

        }
           else {
             return "red"
        }
    }
}






