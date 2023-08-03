import { NgModule } from '@angular/core';
import { FilterComponent } from "./components/filter/filter.component";
import { TotalCountComponent } from './components/total-count/total-count.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    FilterComponent,
    TotalCountComponent,
    CardComponent,
  ],
  exports: [
    FilterComponent,
    TotalCountComponent,
    CardComponent,
  ],
})
export class HomePageComponentsModule { }
