import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ApiService } from 'src/app/services/api.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  idFilmLoaded:string;
  film:any;
  isFavorited:boolean=false;

  constructor(
    private activated: ActivatedRoute,
    private apiServ:ApiService,
    private emailComposer:EmailComposer,
    private favServ:FavoriteService) { }

  ngOnInit() {
    this.idFilmLoaded = this.activated.snapshot.paramMap.get("id");

    this.apiServ.getFilm(this.idFilmLoaded).subscribe(resp=>{
      this.film = resp;
    });

    this.favServ.isFavorited(this.idFilmLoaded).then(resp=>{
      this.isFavorited = resp;
    })
  }

  shareToEmail(){
    let email={
      to:"ericksoncv1@outlook.com",
      subject:`Share ${this.film.title}`,
      body:'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml:true
    };

    this.emailComposer.open(email);
  }

  favoritedFilm(){
    this.favServ.favoritedFilm(this.idFilmLoaded).then(resp=>{
      this.isFavorited = true;
    });
  }

  unFavoritedFilm(){
    this.favServ.unFavoriteFilm(this.idFilmLoaded).then(resp=>{
      this.isFavorited = false;
    });
  }

}
