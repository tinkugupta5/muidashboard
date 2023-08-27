import create from 'zustand'
import {persist} from "zustand"

let appStore = (set) => ({
    dopen:true,
    updateOpen:(dopen) => set((state) => ({dropen:dopen}))
})

appStore = persist(appStore,{name:"my_app_store"});
export const useAppStore = create(appStore);