import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { login } = new AuthRepositoryImpl();

export const LoginAuthUseCase = async (userName: string, userPassword: string) => {
    return await login(userName, userPassword);
}

