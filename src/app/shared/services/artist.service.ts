import { BaseApiService } from './base-api.service';
import { Artist } from '../models/artist.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArtistService extends BaseApiService {
  private static readonly ARTISTS_API = `${BaseApiService.BASE_API}/artists`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Artist>> {
    return this.http.get(
      ArtistService.ARTISTS_API,
      BaseApiService.defaultOptions
    )
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id:string): Observable<Artist> {
    return this.http.get(
      `${ArtistService.ARTISTS_API}/${id}`,
      BaseApiService.defaultOptions
    )
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(artist: Artist): Observable<Artist> {
    return this.http.post(`${ArtistService.ARTISTS_API}`,
    artist.asFormData(),
    new RequestOptions({ withCredentials: true}
    ))
      .map((res: Response) => res.json())
      .catch ((error => this.handleError(error)));
}

  edit(artist: Artist): Observable<Artist> {
    return this.http.put(
      `${ArtistService.ARTISTS_API}/${artist.id}`,
      artist.asFormData(),
      new RequestOptions({ withCredentials: true}
      ))
      .map((res: Response) => res.json())
      .catch ((error => this.handleError(error)));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(
      `${ArtistService.ARTISTS_API}/${id}`,
      BaseApiService.defaultOptions
    )
      .map((res: Response) => res.json())
      .catch ((error => this.handleError(error)));
  }
}
