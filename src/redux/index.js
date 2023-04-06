// import { createStore } from 'redux'
// function reducer(state = { count: 1, msg: '劳斯莱斯' }, action) {
//     // console.log(state, action)
//     switch (action.type) {
//         case 'Add':
//             return {
//                 ...state,
//                 count: state.count + action.data
//             }
//         default:
//             return state
//     }
// }
// const store = createStore(reducer)
// store.subscribe(() => {
//     console.log(store.getState());
// });
// store.dispatch({ type: 'Add', data: 1234 })
// store.dispatch({ type: "Add", data: 2 });
// store.dispatch({ type: "Add", data: 3 });
// store.dispatch({ type: "Add", data: 4 });
// // console.log(store.getState())
// import { configureStore } from "redux"
import { configureStore,applyMiddleware  } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from './reducer'
const store = configureStore(reducer,applyMiddleware(thunk))
export default store