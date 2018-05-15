import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router'
import { ArtistService } from './shared/services/artist.service';

import { AppComponent } from './app.component';
import { ConcertComponent } from './concert/concert.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { FormArtistComponent } from './form-artist/form-artist.component';
import { ArtistBaseComponent } from './artist-base/artist-base.component';

// Las rutas son un array de objetos que tienen un path que es donde van a llevar y el componente que inyectan
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '', component: HomeComponent},
  { path : 'artists', component: ArtistListComponent},
  { path: 'concerts', component: ConcertComponent },
  {
    path: 'artist',
    component: ArtistBaseComponent,
    children: [{
      path: 'new',
      component: FormArtistComponent
      },
      {
        path: ':id',
        component: ArtistComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    HomeComponent,
    ArtistBaseComponent,
    ArtistComponent,
    ArtistListComponent,
    FormArtistComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
