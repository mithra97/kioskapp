import *  as ActionTypes from './ActionTypes';

export const addToQueue = (item) => dispatch => {
    
    const queueFromStorrage = localStorage.getItem("queue") ? JSON.parse(localStorage.getItem('queue')) : []
    queueFromStorrage.push(item)
    localStorage.setItem("queue", JSON.stringify(queueFromStorrage))

    dispatch({
        type: ActionTypes.ADD_TO_QUEUE,
        payload: item
    })

}