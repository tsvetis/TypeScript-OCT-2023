import { User } from "../types/userTypes";
import { HttpService } from "./httpService";

export class UsersService extends HttpService<User> {
  constructor(baseUrl: string) {
    super(`${baseUrl}/users`);
  }

  userGetAll() {
    // validation
    this.getAll();
  }
}
