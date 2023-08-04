import { Component, OnInit } from '@angular/core';
import { HomePageComponentsModule } from "./home-page-components.module";
import { MatDividerModule } from "@angular/material/divider";
import { ArticlesService } from "../../services/articles.service";
import { Store } from "@ngrx/store";
import * as HomePageActions from "./store/home-page.actions";
import * as HomePageSelects from "./store/home-page.selectors";
import { Observable } from "rxjs";
import { AppState } from "../../interfaces/store";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { Articles } from "../../interfaces/acticles";

@Component({
  standalone: true,
  imports: [
    HomePageComponentsModule,
    MatDividerModule,
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  providers: [ArticlesService],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  count$: Observable<number | undefined> = this.store.select(HomePageSelects.selectHomePageCount);
  articles$: Observable<Articles.Item[] | undefined> = this.store.select(HomePageSelects.selectHomePageArticles);

  searchText = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getArticles();
  }

  filter(search: string): void {
    this.searchText = search
    this.getArticles(search);
  }

  private getArticles(search?: string): void {
    this.store.dispatch(HomePageActions.getArticles({ search }));
  }
}
