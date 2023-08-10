import { createAction, props } from "@ngrx/store";
import { Articles } from "../../../interfaces/acticles";

export const getArticleById = createAction(
  '[Article Page] Get Article By Id',
  props<{ id: number }>()
);

export const getArticleByIdSuccess = createAction(
  '[Article Page] Get Article By Id Success',
  props<{ article: Articles.Item }>()
);
export const getArticleByIdError = createAction(
  '[Article Page] Get Article By Id Error'
);
