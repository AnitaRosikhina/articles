import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as HomePageActions from "./home-page.actions";
import { ArticlesService } from "../../../services/articles.service";
import { of } from "rxjs";

@Injectable()
export class HomePageEffects {
  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}

  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.getArticles),
      switchMap(action =>
        this.articlesService.getArticles().pipe(
          map(response => HomePageActions.getArticlesSuccess(response)),
          catchError(error => of(HomePageActions.getArticlesError()))
        )
      )
    ));
}
