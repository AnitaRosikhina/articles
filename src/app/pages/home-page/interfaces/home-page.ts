import { Articles } from "../../../interfaces/acticles";

export interface HomePageState {
  articles: Articles.Item[];
  count?: number;
}
