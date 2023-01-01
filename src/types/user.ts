export interface IUser {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: 'OWNER' | 'EDITOR';
  [key: string]: any;
}
