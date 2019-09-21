import { Component, OnInit } from '@angular/core';

import { PlayerModel } from '../../models/player.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  // Dummy Data
  PLAYERS_DATA: PlayerModel[] = [
    {
      firstName: 'Heung-min',
      lastName: 'Son',
      age: 27,
      rate: 5,
      league: 'premier_league',
      team: 'tottenham_hotspur',
      position: 'FW'
    },
    {
      firstName: 'Erik',
      lastName: 'Lamela',
      age: 27,
      rate: 4,
      league: 'premier_league',
      team: 'tottenham_hotspur',
      position: 'MF'
    },
  ];

  players: PlayerModel[] = this.PLAYERS_DATA;

  constructor() { }

  ngOnInit() {
  }

}
