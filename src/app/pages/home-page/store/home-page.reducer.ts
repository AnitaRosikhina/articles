import { createReducer, on } from "@ngrx/store";
import * as HomePageActions from "./home-page.actions";
import { HomePageState } from "../interfaces/home-page";

const initialState: HomePageState = {
  articles: []
};

export const homePageReducer = createReducer(
  initialState,
  on(
    HomePageActions.getArticlesSuccess,
    (state, { count, articles }) => ({
      ...state,
      articles: articles,
      count: count
    })
  ),
  on(
    HomePageActions.getArticlesError,
    state => ({
      ...state,
      articles: [],
      count: 0
    })
  ),
);
