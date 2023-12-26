/* eslint-disable no-unused-vars */
import { AxiosResponse } from 'axios';
import API from './https';

type TYPE_METHODS = {
  get: (url: string) => Promise<AxiosResponse<any>>;
  post: (url: string, data: any) => Promise<AxiosResponse<any>>;
  put: (url: string, data: any) => Promise<AxiosResponse<any>>;
  delete: (url: string) => Promise<AxiosResponse<any>>;
};

export const Methods: TYPE_METHODS = {
  get: (url: string) => API.get(url),
  post: (url: string, data: any) => API.post(url, data),
  put: (url: string, data: any) => API.put(url, data),
  delete: (url: string) => API.delete(url),
};

export type { TYPE_METHODS };
