
const kioskReducer = (state={queue:[]}, action) => {
    switch (action.type) {
        case "ADD_TO_QUEUE":
            return {
                ...state,
                queue: [...state.queue, action.payload]
            }
        default:
            return state
    }
}

export {kioskReducer} 