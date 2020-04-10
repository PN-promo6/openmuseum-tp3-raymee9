import { Component, OnInit } from '@angular/core';
import { MuseumListService} from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumName: string;
  museumCity: string;
  museumAdress: string;
  museumPhone: string;
  museumWeb: string;
  museumOpen: string;
  museumRef: any;
  index: number;


  constructor(private museumListService:MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    // const museumRef = this.route.snapshot.params['ref_musee'];
    // this.museumName = this.museumListService.getMuseumById(+museumRef).nom_du_musee;
    // this.museumCity = this.museumListService.getMuseumById(+museumRef).ville;
    // this.museumAdress = this.museumListService.getMuseumById(+museumRef).adr;
    // this.museumPhone = this.museumListService.getMuseumById(+museumRef).telephone;
    // this.museumWeb = this.museumListService.getMuseumById(+museumRef).sitweb;
    // this.museumOpen = this.museumListService.getMuseumById(+museumRef).fermeture_annuelle;
  }

}
