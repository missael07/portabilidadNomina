import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

const URL = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: { 'x-auth-token': this.token },
    };
  }
  private generateUsersCollection(collection: any[]): User[] {
    const users = collection.map(
      (r) =>
        new User(
          r.name,
          r.email,
          r.role,
          r.isActive,
          '',
          r.google,
          r.img,
          r.uid
        )
    );
    return users;
  }

  search(type: 'users' | 'hospitals' | 'doctors', searchBy: string = '') {
    const url = `${URL}search/searchBy/${type}/${searchBy}`;
    return this.http.get(url, this.headers).pipe(
      map((resp: any) => {
        switch (type) {
          case 'users':
            return this.generateUsersCollection(resp.results);
          default:
            return [];
        }
      })
    );
  }
}
