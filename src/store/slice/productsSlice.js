import { createSlice } from "@reduxjs/toolkit";

const defaultState = [
    {
      id:1,
      title: 'first',
      price: 1500
    },
    {
      id:2,
      title: 'second',
      price: 700
    },
    {
      id:3,
      title: 'something3',
      price: 3500
    },
    {
      id:4,
      title: 'something4',
      price: 900
    }
  ]

  export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: defaultState
    },
    reducers: {
        remove (state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
        },
        add (state, {payload}){
            state.list.push(payload)
        }
    }
})

export const { remove, add }= productsSlice.actions;
export default productsSlice.reducer;