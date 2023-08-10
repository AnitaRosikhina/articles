import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { homePageReducer } from "./pages/home-page/store/home-page.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomePageEffects } from "./pages/home-page/store/home-page.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ArticlesService } from "./services/articles.service";
import { environment } from "../environments/environment";
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { articlePageReducer } from "./pages/article-page/store/article-page.reducer";
import { ArticlePageEffects } from "./pages/article-page/store/article-page.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomePageComponent,
    ArticlePageComponent,
    StoreModule.forRoot({
      homePage: homePageReducer,
      articlePage: articlePageReducer,
    }),
    EffectsModule.forRoot([
        HomePageEffects,
        ArticlePageEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
