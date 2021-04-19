import { LOAD_CHANNELS, LOAD_USERS } from "../types"


export const pairReducer = (state = {}, action) => {
    switch(action.type) {
        case  LOAD_USERS:
            return {
                pair: action.pair,
            }
        case LOAD_CHANNELS: 
        return {
            channels: action.channels
        }
        default : 
            
    }
    return state
}