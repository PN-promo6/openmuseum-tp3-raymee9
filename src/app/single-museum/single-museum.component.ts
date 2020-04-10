import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})
export class SingleMuseumComponent implements OnInit {
// 1 : variable

@Input() museumName: string;
@Input() museumAdress: string;
@Input() museumCp: string;
@Input() museumCity: string;
@Input() museumPhone: string;
@Input() museumWeb: string;
@Input() museumOpen: string;


// museumTitle: string = "Musée picasso";
// museumAdress: string = "Place Mariejol";
// museumCp: string = "06600";
// museumCity: string = "ANTIBES";
// museumPhone: string = "0492905421";
// museumWeb: string = "www.antibes-juanlespins.com";
// museumOpen: string = "Ouvert du 16 septembre au 14 juin de 10h à 12h et de 14h à 18h, du 15 juin au 15 septembre de 10h à 18h. Nocturnes en juillet et aout le mercredi et le vendredi jusqu'a 20h";


  constructor() { }

  ngOnInit() {
  }

}
