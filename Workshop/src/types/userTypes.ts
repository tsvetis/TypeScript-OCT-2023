import { Address, Company } from "./commonTypes";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type UserDetails = {
  user: User;
  address: Address;
  website: string;
  company: Company;
};
