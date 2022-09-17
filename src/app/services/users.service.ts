import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { map, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import {
  RegisterForm,
  LoginForm,
  UpdateUser,
  LoadUser,
} from '../interfaces/appInterfaces.interface';

declare const google: any;
let URL = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public user: User;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.user = new User('', '', '', '', '', false, '', '');
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get uid(): string {
    return this.user.uid || '';
  }

  get headers() {
    return {
      headers: { 'x-auth-token': this.token },
    };
  }
  validateToken(): Observable<boolean> {
    console.log(this.token);
    return this.http
      .get(`${URL}login/renew`, {
        headers: { 'x-auth-token': this.token },
      })
      .pipe(
        map((resp: any) => {
          console.log(resp);
          const { name, email, role, isActive, password, google, img, uid } =
            resp.user;
          this.user = new User(
            name,
            email,
            role,
            isActive,
            password,
            google,
            img,
            uid
          );
          localStorage.setItem('token', resp.token);
          localStorage.setItem('name', name);
          return true;
        }),
        catchError((err) => of(false))
      );
  }

  createUser(formData: RegisterForm) {
    return this.http.post(`${URL}users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  updateUser(data: UpdateUser) {
    return this.http.put(`${URL}users/${this.uid}`, data, this.headers).pipe(
      tap((resp: any) => {
        // localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${URL}login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  googleSignIn(token: string) {
    return this.http.post(`${URL}login/google`, { token }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.tokenUser);
      })
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    if (google.accounts.id) {
      google.accounts.id.initialize({
        client_id:
          '472483945643-6ncluvn5lllj6vc9lnq83s1q3tc9pcpb.apps.googleusercontent.com',
      });
      google.accounts.id.revoke('lmpadillar@gmail.com', () => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/login');
        });
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  loadUsers(from: number = 0) {
    const url = `${URL}users?from=${from}`;
    return this.http.get<LoadUser>(url, this.headers).pipe(
      map((resp) => {
        const users = resp.users.map(
          (user) =>
            new User(
              user.name,
              user.email,
              user.role,
              user.isActive,
              '',
              user.google,
              user.img,
              user.uid
            )
        );
        return {
          total: resp.total,
          users,
        };
      })
    );
  }

  deleteUser(user: User) {
    const url = `${URL}users/${user.uid}`;
    return this.http.delete(url, this.headers);
  }

  changeRole(user: User) {
    return this.http.put(`${URL}users/${user.uid}`, user, this.headers);
  }

  impersonateUser(user: User) {
    return this.http.get(`${URL}users/impersonate`, {
      headers: { 'x-auth-token': this.token },
      params: { email: user.email, uid: user.uid || '' },
    });
  }

  getUser(id: string) {
    return this.http
      .get(`${URL}users/user`, {
        headers: { 'x-auth-token': this.token },
        params: { uid: id || '' },
      })
      .pipe(
        map((resp: any) => {
          const { name, email, google, img, role, isActive, uid } = resp.user;
          const user = new User(
            name,
            email,
            role,
            isActive,
            '',
            google,
            img,
            uid
          );
          console.log('bduser', user);
          return user;
        })
      );
  }

  loadRoles() {
    const url = `${URL}role`;
    return this.http.get(url, this.headers);
  }
}

interface Response {
  ok: boolean;
  user: User;
}
