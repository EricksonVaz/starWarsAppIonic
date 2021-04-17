import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films:Observable<any>;

  constructor(private navCtrl:NavController,private router:Router, private apiServ:ApiService) { }

  ngOnInit() {
    this.films = this.apiServ.getFilms();
  }
  openDetails(film){
    let filmSplit = film.url.split("/");
    let filmId = filmSplit[filmSplit.length - 2];
    this.navCtrl.navigateRoot(`/tabs/films/${filmId}`);
  }

  goToDetails(){
    this.navCtrl.navigateRoot("/tabs/films/42");
  }

  goToPlanets(){
    this.router.navigateByUrl("/tabs/planets");
  }

}
