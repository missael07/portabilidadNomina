import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }
  // get uid(): string {
  //   return this.user.uid || '';
  // }

  get headers() {
    return {
      headers: { 'x-auth-token': this.token },
    };
  }

  getRequestsByID(uid?: string, role: string = '') {
    return this.http.get(`${base_url}requests/${uid}`, this.headers);
  }

  createRequest(data: any) {
    return this.http.post(`${base_url}requests/`, data, this.headers);
  }

  deleteRequest(uid: string) {
    return this.http.delete(`${base_url}requests/${uid}`, this.headers);
  }
}
