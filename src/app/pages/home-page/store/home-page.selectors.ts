import { HomePageState } from "../interfaces/home-page";
import { createSelector } from "@ngrx/store";
import { AppState } from "../../../interfaces/store";

export const selectHomePage = (state: AppState) => state.homePage;

export const selectHomePageCount = createSelector(
  selectHomePage,
  (state: HomePageState) => state.count
);

export const selectHomePageArticles = createSelector(
  selectHomePage,
  (state: HomePageState) => state.articles
);
