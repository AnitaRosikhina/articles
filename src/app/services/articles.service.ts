import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Articles } from "../interfaces/acticles";

@Injectable()
export class ArticlesService {

  private readonly API_BASE_URL = 'https://api.spaceflightnewsapi.net/v4'
  constructor(private httpClient: HttpClient) {}

  getArticles(): Observable<Articles.Response> {
    return this.httpClient.get<Articles.Response>(`${this.API_BASE_URL}/articles`);
  }

  getArticleById(id: number): Observable<Articles.Response> {
    return this.httpClient.get<Articles.Response>(`${this.API_BASE_URL}/articles/${id}`);
  }
}
