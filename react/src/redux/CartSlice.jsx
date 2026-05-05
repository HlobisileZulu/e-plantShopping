import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
 name:'cart',
 initialState:{items:{}},
 reducers:{
 addToCart:(s,a)=>{const p=a.payload; s.items[p.id]?s.items[p.id].qty++:s.items[p.id]={...p,qty:1}},
 increase:(s,a)=>{s.items[a.payload].qty++},
 decrease:(s,a)=>{const id=a.payload; if(s.items[id].qty>1)s.items[id].qty--; else delete s.items[id]},
 remove:(s,a)=>{delete s.items[a.payload]}
 }
});
export const {addToCart,increase,decrease,remove}=slice.actions;
export default slice.reducer;