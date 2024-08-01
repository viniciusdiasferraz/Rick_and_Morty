import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

class ApiError extends Error {
  response: AxiosResponse | undefined;

  constructor(message: string | undefined, response?: AxiosResponse) {
    super(message);
    this.response = response;
  }
}

export { api, ApiError };
