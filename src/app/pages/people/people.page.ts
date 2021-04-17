import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  peoples:Observable<any>;
  constructor(private apiserv: ApiService,private navCtrl:NavController) { }

  ngOnInit() {
    this.peoples = this.apiserv.getPeoples();
  }

  openDetails(people){
    let peopleUrlSplit = people.url.split("/")
    let peopleId = peopleUrlSplit[peopleUrlSplit.length - 2];
    this.navCtrl.navigateRoot(`/tabs/people/${peopleId}`);
  }

}
