import { Component, OnInit } from '@angular/core';
import { HomePageComponentsModule } from "./home-page-components.module";
import { MatDividerModule } from "@angular/material/divider";
import { ArticlesService } from "../../services/articles.service";
import { Store } from "@ngrx/store";
import * as HomePageActions from "./store/home-page.actions";

@Component({
  standalone: true,
  imports: [
    HomePageComponentsModule,
    MatDividerModule
  ],
  providers: [ArticlesService],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.getArticles());
  }
}
