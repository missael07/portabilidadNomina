import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public isActive: boolean,
    public gender: string,
    public bDate: string,
    public password?: string,
    public img?: string,
    public uid?: string
  ) {}

  get imageURL() {
    if (this.img) {
      return `${base_url}upload/users/${this.img}`;
    }
    // upload/users/
    return `${base_url}upload/users/noimage.jpg`;
  }
}
