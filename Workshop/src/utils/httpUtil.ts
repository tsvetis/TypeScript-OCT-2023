export const fetchUtil = <T>(url: string, httpConfig?: RequestInit) => {
  return fetch(url, httpConfig)
    .then((response) => response.json())
    .then((data: T) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};
