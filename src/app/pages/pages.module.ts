import { RoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [DetalhesComponent, CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RoutingModule
  ]
})
export class PagesModule { }
