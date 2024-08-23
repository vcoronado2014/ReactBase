import { ResponseApiApp } from "../../Data/sources/remote/models/ResponseApiApp";

export interface AuthRepository {
    login(userName: string, userPassword: string) : Promise<ResponseApiApp>
}