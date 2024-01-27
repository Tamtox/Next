import { create} from 'zustand'


export interface IUtilitySlice {
  sideBarOpen: boolean
  toggleSideBar: () => void
}

export const useUtilityStore = create<IUtilitySlice>()((set, get) => ({
  sideBarOpen: false,
  toggleSideBar: () => set((state) => ({ sideBarOpen: !state.sideBarOpen })),
}))
