import React, { useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';

// hooks
import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        userName: '',
        userPassword: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const { user, getUserSesion } = useUserLocal();
    console.log('usuario de session ', JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const login = async () => {
        if (isValidForm()) {
            setIsLoading(true);
            const response = await LoginAuthUseCase(values.userName, values.userPassword);
            console.log('RESPONSE: ', JSON.stringify(response.result));
            if (response.result === ''){
                setErrorMessage('Usuario no Existe');
            }
            else{
                await SaveUserLocalUseCase(response.result);
                getUserSesion();
            }
            setIsLoading(false);
        }

    }

    const isValidForm = ():boolean =>{
        if (values.userName === ''){
            setErrorMessage('Usuario inválido');
            return false;
        }
        if (values.userPassword === ''){
            setErrorMessage('Password inválido');
            return false;
        }
        return true;
    }

    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage,
        isLoading
    }
}

export default HomeViewModel;
