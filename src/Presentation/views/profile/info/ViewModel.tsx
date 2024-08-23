import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

const ProfileInfoViewModel = () => {

    const removeSesion = async  () => {
        await RemoveUserLocalUseCase();
    }
  return {
    removeSesion
  }
}

export default ProfileInfoViewModel;
