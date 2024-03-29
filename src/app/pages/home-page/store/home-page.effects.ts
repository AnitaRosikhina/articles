import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as HomePageActions from "./home-page.actions";
import { ArticlesService } from "../../../services/articles.service";
import { of } from "rxjs";

@Injectable()
export class HomePageEffects {
  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.getArticles),
      switchMap(({ search }) =>
        this.articlesService.getArticles(search).pipe(
          map(({ count, results }) =>
            HomePageActions.getArticlesSuccess({ count, articles: results })),
          catchError(() => of(HomePageActions.getArticlesError()))
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
