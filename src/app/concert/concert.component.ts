import { Component, OnInit } from '@angular/core';
import { Concert } from '../shared/models/concert.model'
import { CONCERTS } from '../mock-concerts';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {
  concerts = CONCERTS
  selectedConcert: Concert;

  onSelect(concert: Concert): void {
    this.selectedConcert = concert;
  }

  constructor() { }

  ngOnInit() {
  }

}
