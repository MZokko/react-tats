import create from 'zustand'

const store = create((set)=>({
    bannerloading: false,
    bannerLoaded:()=> set (state=>({bannerloading: !state.bannerloading}))
}))