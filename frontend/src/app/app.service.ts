import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
  private http = inject(HttpClient);

  getUserData(id: number): Observable<{ id: number; firstName: string; lastName: string; email: string }> {
    return this.http.get<{ id: number; firstName: string; lastName: string; email: string }>(
      `api/user/${id}`
    );
  }
}
