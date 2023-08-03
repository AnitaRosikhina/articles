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
    StoreModule.forRoot({ homePage: homePageReducer }),
    EffectsModule.forRoot([HomePageEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
