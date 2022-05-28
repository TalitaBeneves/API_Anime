import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeModel } from '../core/AnimeModel';

@Injectable({
  providedIn: 'root',
})
export class ApiAnimeService {
  animeId!: AnimeModel;
  Url: string = 'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=2';

  constructor(private http: HttpClient) {}

  obterAnime(url: string): any {
    return this.http.get<any>(this.Url);
  }

  setAnime(idAnime: AnimeModel) {
    this.animeId = idAnime;
  }

  obterAnimeId() {
    return this.animeId;
  }
}
