import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeModel } from 'src/app/core/AnimeModel';
import { ApiAnimeService } from 'src/app/service/api-anime.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  detalhe: any;

  constructor(private api: ApiAnimeService) {}

  ngOnInit(): void {
    this.detalhe = this.api.obterAnimeId();
  }
}
