import { ADD } from "./constants"
function Add(data) {
    return {
        type: ADD,
        data
    }
}

function asyscADD(data) {
    return dispatch => {
        setTimeout(() => {
            dispatch((Add(data)))
        }, 1000)
    }
}

export {
    Add, asyscADD
}

