import { HomePageState } from "../pages/home-page/interfaces/home-page";
import { ArticlePageState } from "../pages/article-page/interfaces/article-page";

export interface AppState {
  homePage: HomePageState;
  articlePage: ArticlePageState;
}
