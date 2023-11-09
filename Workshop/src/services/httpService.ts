export class HttpService<T> {
  protected apiUrl: string;
  data = {} as T;
  dataCollection = [] as T[];

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  create(body: T) {
    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data: T) => {
        this.data = data;
      })
      .catch((error) => console.error(error));
  }

  getAll() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data: T[]) => {
        this.dataCollection = data;
      })
      .catch((error) => console.error(error));
  }

  getOne(id: number) {
    fetch(`${this.apiUrl}/${id}`)
      .then((response) => response.json())
      .then((data: T) => {
        this.data = data;
      })
      .catch((error) => console.error(error));
  }

  update<T extends { id: number }>(body: T) {
    fetch(`${this.apiUrl}/${body.id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data: T) => {
        console.log("data", data);
      })
      .catch((error) => console.error(error));
  }

  delete(id: number) {
    fetch(`${this.apiUrl}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data: T) => {
        console.log("data", data);
      })
      .catch((error) => console.error(error));
  }
}
