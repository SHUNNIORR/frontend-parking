export interface LoginUser {
  email: string;
  password: string;
}
export interface User {
    name:   string;
    email:  string;
    role:   string;
    status: boolean;
    google: boolean;
    uid:    string;
}
export interface LoginUserResponse {
    user:  User;
    token: string;
}

