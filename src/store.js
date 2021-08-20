import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { kioskReducer } from './reducers/kioskReducer';

const reducer = combineReducers({
    kiosk:kioskReducer
}) 

const queueFromStorrage = localStorage.getItem("queue") ? JSON.parse(localStorage.getItem('queue')) : []

const initialState = {
    clerk: "megan",
    queue: queueFromStorrage
}

const middleware = [ thunk ]

const store = createStore( kioskReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store