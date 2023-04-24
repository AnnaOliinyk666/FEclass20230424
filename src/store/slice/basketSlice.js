import { createSlice } from "@reduxjs/toolkit";

// const defaultState = [
//     {
//       id:1,
//       count: 1
//     },
//     {
//       id:2,
//       count: 1
//     },
//     {
//       id:3,
//       count: 1
//     },
//     {
//       id:4,
//       count: 1
//     }
//   ]


  export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: []
    },
    reducers: {
        add (state, {payload}){
          const target = state.list.find(({id}) => id === payload);
          if (target === undefined) {
            state.list.push({id:payload, count:1})
          } else {
            target.count++
          }
    
        },
        increment(state,{payload}){
          const target = state.list.find(({id}) => id === payload);
          target.count++
        },
        decrement(state,{payload}){
          const target = state.list.find(({id}) => id === payload);
          target.count--
          if (target.count === 0) {
              state.list = state.list.filter (({id}) => id !== payload)
          } 
        },
        remove(state, {payload}){
          state.list = state.list.filter (({id}) => id !== payload)
          
        }
    }
})

export const { add, increment, decrement, remove }= basketSlice.actions;
export default basketSlice.reducer;

