import { create, StateCreator } from 'zustand'


export interface IAuthSlice {
  isAuthorized: boolean
}

export const useAuthStore = create<IAuthSlice>()((set, get) => ({
  isAuthorized: false,
}))
