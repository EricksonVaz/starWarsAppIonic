import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets:Observable<any>;
  constructor(private navCtrl:NavController,private apiServ:ApiService) { }

  ngOnInit() {
    this.planets = this.apiServ.getPlanets();
  }

  openDetails(planet){
    let planetUrlSplit = planet.url.split("/")
    let planetId = planetUrlSplit[planetUrlSplit.length - 2];
    this.navCtrl.navigateRoot(`/tabs/planets/${planetId}`);
    console.log(planetId);
  }

}
