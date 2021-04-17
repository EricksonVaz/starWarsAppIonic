import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

  people:any;
  constructor(private apiServ:ApiService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let idPeople = this.activatedRoute.snapshot.paramMap.get("id");
    this.apiServ.getPeople(idPeople).subscribe(resp=>{
      this.people = resp
    });
  }

}
