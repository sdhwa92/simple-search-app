import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

import { PlayerModel } from '../../models/player.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  players: PlayerModel[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.appService.getAllPlayers().subscribe(data => {
      this.players = data;
      console.log(data);
    });
  }

}
