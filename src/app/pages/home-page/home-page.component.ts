import { Component } from '@angular/core';
import { HomePageComponentsModule } from "./home-page-components.module";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  standalone: true,
  imports: [
    HomePageComponentsModule,
    MatDividerModule
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
}
