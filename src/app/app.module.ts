import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ConcertComponent } from './concert/concert.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';


// Las rutas son un array de objetos que tienen un path que es donde van a llevar y el componente que inyectan
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'concerts', component: ConcertComponent },
  { path : 'artist', component: ArtistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    HomeComponent,
    ArtistComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
