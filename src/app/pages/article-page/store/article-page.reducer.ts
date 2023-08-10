import { createReducer, on } from "@ngrx/store";
import * as ArticlePageActions from "./article-page.actions";
import { ArticlePageState } from "../interfaces/article-page";

const initialState: ArticlePageState = {};

export const articlePageReducer = createReducer(
  initialState,
  on(
    ArticlePageActions.getArticleByIdSuccess,
    (state, { article }) => ({
      ...state,
      article
    })
  ),
  on(
    ArticlePageActions.getArticleByIdError,
    state => ({
      ...state,
      article: undefined
    })
  ),
);
