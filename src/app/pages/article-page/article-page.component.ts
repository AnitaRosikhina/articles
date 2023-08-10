import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../interfaces/store";
import * as ArticlePageActions from "./store/article-page.actions";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Articles } from "../../interfaces/acticles";
import * as ArticlePageSelects from "../article-page/store/article-page.selectors";
import { AsyncPipe, NgIf } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  standalone: true,
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  imports: [
    AsyncPipe,
    NgIf,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageComponent implements OnInit {
  article$: Observable<Articles.Item | undefined> = this.store.select(ArticlePageSelects.selectArticlePageArticle);

  constructor(
      private store: Store<AppState>,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.getArticle();
  }

  navigateBackToHomePage(): void {
    this.router.navigate(['/']);
  }

  private getArticle(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    this.store.dispatch(ArticlePageActions.getArticleById({ id }));
  }
}
