import { ArtistService } from './../shared/services/artist.service';
import { Artist } from './../shared/models/artist.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.css']
})
export class FormArtistComponent implements OnInit {
  artist: Artist = new Artist();
  apiError: string;
  @ViewChild('artistForm') artistForm;

  constructor(
    private router: Router,
    private artistService: ArtistService) { }

onSubmitArtist(artistForm: NgForm){
  this.artistService.create(this.artist)
    .subscribe(
      (artist) => {
        artistForm.reset();
        this.router.navigate(['/artist']);
      },
      (error) => {
        this.apiError = error;
      }
    )
}
  ngOnInit() {
  }

}
