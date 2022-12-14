import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor() {}

  async updatePhoto(file: File, id?: string) {
    try {
      const url = `${base_url}upload/${id}`;
      const formData = new FormData();
      formData.append('img', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-auth-token': localStorage.getItem('token') || '',
        },
        body: formData,
      });
      const data = await resp.json();
      console.log(data);
      if (data['ok']) {
        return data.fileName;
      } else {
        console.log(data.msg);
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
