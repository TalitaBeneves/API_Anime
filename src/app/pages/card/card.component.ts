import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeModel } from 'src/app/core/AnimeModel';
import { ApiAnimeService } from 'src/app/service/api-anime.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  dados!: AnimeModel[];

  constructor(private api: ApiAnimeService, private router: Router) {}

  ngOnInit(): void {
    this.chamandoApi();
  }

  chamandoApi() {
    this.api.obterAnime().subscribe({
      next: (res: any) => {
        this.dados = res.data;
        console.log(res.data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  obterndoAnimeId(idAnime: AnimeModel) {
    this.api.setAnime(idAnime);
    this.router.navigateByUrl('/detalhes');
  }
}
