import { Component } from '@angular/core';
import { HomePageComponentsModule } from "./home-page-components.module";
import { MatDividerModule } from "@angular/material/divider";
import { ArticlesService } from "../../services/articles.service";

@Component({
  standalone: true,
  imports: [
    HomePageComponentsModule,
    MatDividerModule
  ],
  providers: [ArticlesService],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
}
