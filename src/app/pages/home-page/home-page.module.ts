import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from "./home-page.component";
import { FilterComponent } from "./components/filter/filter.component";
import { TotalCountComponent } from './components/total-count/total-count.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    FilterComponent,
    TotalCountComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
  ],
})
export class HomePageModule { }
