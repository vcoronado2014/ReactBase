import React, { useEffect, useState } from 'react'
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { User } from '../../Domain/entities/User';

export const useUserLocal = () => {

    const [user, setUser] = useState<User>()

    useEffect(() => {
        getUserSesion();
    }, [])

    const getUserSesion = async() => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }
    
  return {
    user,
    getUserSesion
  }
}
