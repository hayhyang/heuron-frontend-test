const BASE_PATH = 'https://picsum.photos/v2/list';

export function getData() {
  return fetch(BASE_PATH).then((response) => response.json());
}
