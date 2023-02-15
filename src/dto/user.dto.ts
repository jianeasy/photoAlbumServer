export class addUserDto {
    userName: string;
    password: string;
    phone: string;
    email: string;
    lastLoginTime: string;
}
export class getUserDto {
    userId: number
}
export class deleteUserDto {
    userId: number;
    password: string;
}

export class loginDto {
    userName: string;
    password: string;
}