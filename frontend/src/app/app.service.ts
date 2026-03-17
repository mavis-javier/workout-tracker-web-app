import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AppService {
  private data: string[] = [];
  private name: string = 'World';
  private http = inject(HttpClient);

  // TODO: use http to fetch from DB
  getData(): string[] {
    return [...this.data];
  }

  getName(): string {
    return this.name;
  }
}
