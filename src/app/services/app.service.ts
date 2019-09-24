import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {PlayerModel} from '../models/player.model';

import {map} from 'rxjs/operators';

@Injectable()
export class AppService {
  base_url = 'http://localhost:3000/';
  player_endpoint = 'player';

  constructor(private http: HttpClient) {

  }

  getAllPlayers(): Observable<any> {
    return this.http.get(this.base_url + this.player_endpoint + '?_sort=id&_order=desc');
  }

}
