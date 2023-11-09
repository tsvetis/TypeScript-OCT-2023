import { User } from "../types/userTypes";

export class UsersService {
  private apiUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = `${baseUrl}/users`;
  }

  create(body: User) {
    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data: User) => {
        console.log("user data", data);
      })
      .catch((error) => console.error(error));
  }

  getAll() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data: User[]) => {
        console.log("user data", data);
      })
      .catch((error) => console.error(error));
  }

  getOne(userId: number) {
    fetch(`${this.apiUrl}/${userId}`)
      .then((response) => response.json())
      .then((data: User) => {
        console.log("user data", data);
      })
      .catch((error) => console.error(error));
  }

  update(body: User) {
    fetch(`${this.apiUrl}/${body.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data: User) => {
        console.log("user data", data);
      })
      .catch((error) => console.error(error));
  }

  delete(userId: number) {
    fetch(`${this.apiUrl}/${userId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data: User) => {
        console.log("user data", data);
      })
      .catch((error) => console.error(error));
  }
}
