import { createSelector } from "@ngrx/store";
import { AppState } from "../../../interfaces/store";
import { ArticlePageState } from "../interfaces/article-page";

export const selectArticlePage = (state: AppState) => state.articlePage;

export const selectArticlePageArticle = createSelector(
    selectArticlePage,
  ({ article }: ArticlePageState) => article
);
