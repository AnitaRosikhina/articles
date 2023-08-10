import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ArticlePageActions from "./article-page.actions";
import { ArticlesService } from "../../../services/articles.service";
import { of } from "rxjs";

@Injectable()
export class ArticlePageEffects {
  getArticleById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlePageActions.getArticleById),
      switchMap(({ id }) =>
        this.articlesService.getArticleById(id).pipe(
          map(article => ArticlePageActions.getArticleByIdSuccess({ article })),
          catchError(() => of(ArticlePageActions.getArticleByIdError()))
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}
}
