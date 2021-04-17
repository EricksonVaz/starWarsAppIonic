import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  idFilmLoaded:string;
  film:any;

  constructor(private activated: ActivatedRoute,private apiServ:ApiService) { }

  ngOnInit() {
    this.idFilmLoaded = this.activated.snapshot.paramMap.get("id");
    this.apiServ.getFilm(this.idFilmLoaded).subscribe(resp=>{
      this.film = resp;
    })

  }

}
