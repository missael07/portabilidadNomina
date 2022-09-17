import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

export class User {
  constructor(
    public name: string,
    public email: string,
    public role: string,
    public isActive: string,
    public password?: string,
    public google?: boolean,
    public img?: string,
    public uid?: string
  ) {}

  get imageURL() {
    if (this.google) {
      return this.img;
    }
    if (this.img) {
      console.log(this.img);
      return `${base_url}upload/users/${this.img}`;
    }
    // upload/users/
    return `${base_url}upload/users/noimage.jpg`;
  }
}
