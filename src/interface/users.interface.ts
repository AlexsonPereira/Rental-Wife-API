import { IService } from "./services.interface";
export interface IRequestUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  avatar_img?: string;
  gender?: string;
}

export interface IResponseUpdateUser {
  id: string;
  name: string;
  email: string;
  avatar_img: string;
  gender: string;
  is_hired: boolean;
}

export interface IRequestUpdateAddress {
  street?: string;
  zipCode?: string;
  number?: string;
  city?: string;
  state?: string;
}

export interface IResponseUpdateAddress {
  id: string;
  street: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
}

export interface IRequestUpdateService {
  services?: string;
}

export interface IEmployer {
  id: string;
  name?: string;
  email?: string;
  avatar_img?: string;
  address?: IAddress | null;
}

export interface IHired extends IEmployer {
  services?: IService;
}

export interface IUserWithoutPass {
  id: string;
  name: string;
  email: string;
}

export interface IAddress {
  id: string;
  street: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
}

export interface IRating {
  id?: string;
  recommendation: string;
  note: number;
}
