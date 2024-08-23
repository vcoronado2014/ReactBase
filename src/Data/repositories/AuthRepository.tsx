import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiApp } from "../sources/remote/api/ApiApp";
import { ResponseApiApp } from "../sources/remote/models/ResponseApiApp";

export class AuthRepositoryImpl implements AuthRepository{
    async login(userName: string, userPassword: string): Promise<any> {
        try{
            let data = JSON.stringify({Usuario: userName, Clave: userPassword});
            console.log('LA DATA: ', data);
            const response = await ApiApp.post<ResponseApiApp>('login', data);
            console.log('RESPONSE REPO: ', JSON.stringify(response.data));
            return Promise.resolve({ error: undefined, result: response.data });
        }
        catch(error){
            let e = (error as Error).message;
            console.log('ERROR : ', e);
            return Promise.resolve({error: e, result: undefined})
        }
    }
}