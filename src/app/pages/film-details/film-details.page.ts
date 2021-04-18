import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  idFilmLoaded:string;
  film:any;

  constructor(private activated: ActivatedRoute,private apiServ:ApiService,private emailComposer:EmailComposer) { }

  ngOnInit() {
    this.idFilmLoaded = this.activated.snapshot.paramMap.get("id");
    this.apiServ.getFilm(this.idFilmLoaded).subscribe(resp=>{
      this.film = resp;
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

}
