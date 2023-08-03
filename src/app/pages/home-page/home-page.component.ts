import { Component } from '@angular/core';
import { HomePageComponentsModule } from "./home-page-components.module";

@Component({
  standalone: true,
  imports: [
    HomePageComponentsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
}
