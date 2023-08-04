import { NgModule } from '@angular/core';
import { FilterComponent } from "./components/filter/filter.component";
import { TotalCountComponent } from './components/total-count/total-count.component';
import { CardComponent } from './components/card/card.component';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { DatePipe, SlicePipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HighlighterPipe } from './pipes/highlighter.pipe';


@NgModule({
  declarations: [
    FilterComponent,
    TotalCountComponent,
    CardComponent,
    HighlighterPipe,
  ],
  exports: [
    FilterComponent,
    TotalCountComponent,
    CardComponent,
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    DatePipe,
    SlicePipe,
    ReactiveFormsModule
  ]
})
export class HomePageComponentsModule { }
