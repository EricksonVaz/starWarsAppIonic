import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {

  idPlanet:string;
  planet:any;

  constructor(private apiServ: ApiService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idPlanet = this.activatedRoute.snapshot.paramMap.get("id");
    this.apiServ.getPlanet(this.idPlanet).subscribe(resp=>{
      this.planet = resp
    });
  }

}
