import { fetchUtil } from "../utils/httpUtil";

export class HttpService<T> {
  protected apiUrl: string;
  data = {} as T;
  dataCollection = [] as T[];

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  create(body: T) {
    fetchUtil<T>(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  getAll() {
    fetchUtil<T[]>(this.apiUrl);
  }

  getOne(id: number) {
    fetchUtil<T>(`${this.apiUrl}/${id}`);
  }

  update<T extends { id: number }>(body: T) {
    fetchUtil<T>(`${this.apiUrl}/${body.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  delete(id: number) {
    fetchUtil<T>(`${this.apiUrl}/${id}`, { method: "DELETE" });
  }
}
