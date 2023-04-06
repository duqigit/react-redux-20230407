import { ADD } from "./constants";
function reducer(state = { count: 0, msg: '劳斯莱斯' }, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                count: state.count + action.data
            }
        default:
            return state;
    }
}
export default {
    reducer
}