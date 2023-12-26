import { LocalStore } from '@/helpers/local';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

class API {
  private static instance: API;
  private httpClient: AxiosInstance;
  private readonly token: string | number | null;

  private constructor() {
    this.token = LocalStore.get('access_token');
    this.httpClient = axios.create({
      baseURL: import.meta.env.VITE_APP_API,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.httpClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    this.httpClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  public static getInstance(): API {
    if (!API.instance) {
      API.instance = new API();
    }
    return API.instance;
  }

  public get(url: string): Promise<any> {
    return this.httpClient
      .get(url)
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`GET request failed: ${error.message}`);
      });
  }

  public post(url: string, data: any): Promise<any> {
    return this.httpClient
      .post(url, data)
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`POST request failed: ${error.message}`);
      });
  }

  public put(url: string, data: any): Promise<any> {
    return this.httpClient
      .put(url, data)
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`PUT request failed: ${error.message}`);
      });
  }

  public delete(url: string): Promise<any> {
    return this.httpClient
      .delete(url)
      .then((response: AxiosResponse) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`DELETE request failed: ${error.message}`);
      });
  }
}

export default API.getInstance();
