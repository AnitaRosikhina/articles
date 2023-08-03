import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideState, provideStore } from "@ngrx/store";
import { homePageReducer } from "./app/pages/home-page/store/home-page.reducer";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { HomePageEffects } from "./app/pages/home-page/store/home-page.effects";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState({ name: 'homePage', reducer: homePageReducer }),
    provideEffects([HomePageEffects]),
    provideStoreDevtools(),
  ]
});
