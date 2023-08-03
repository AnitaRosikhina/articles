import { createAction, props } from "@ngrx/store";
import { Articles } from "../../../interfaces/acticles";

export const getArticles = createAction(
  '[Home Page] Get Articles'
);

export const getArticlesSuccess = createAction(
  '[Home Page] Get Articles Success',
  props<{ count: number, articles: Articles.Item[] }>()
);
export const getArticlesError = createAction(
  '[Home Page] Get Articles Error'
);
