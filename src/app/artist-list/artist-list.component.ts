import { ArtistService } from './../shared/services/artist.service';
import { Artist } from './../shared/models/artist.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: Array<Artist> = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.list()
      .subscribe((artists) => this.artists = artists);
  }
}
