import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    minAge: new FormControl(''),
    maxAge: new FormControl(''),
    league: new FormControl(''),
    position: new FormControl(''),
    rate: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

  searchPlayers() {
    alert('Search Players');
  }

}
