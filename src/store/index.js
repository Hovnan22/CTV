import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pairReducer } from "./reducers/pair";




const rootReducer = combineReducers({
     pairReducer,
}) ;


export default createStore(rootReducer, applyMiddleware(thunk));