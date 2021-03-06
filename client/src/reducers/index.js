//import action types

import * as actions from '../actions';


export const initialState = {
    smurfs: [], 
    isLoading: false,
    error: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type) {
        case actions.GET_SMURFLIST_START:
            console.log('in reducer- start')
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case actions.GET_SMURFLIST_SUCCESS:
            console.log('in reducer- success') 
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case actions.GET_SMURFLIST_FAILURE:
            console.log('in reducer- failure') 
            return {
                ...state, 
                isLoading: false,
                smurfs: [],
                error: action.payload
            }
        case actions.ADD_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case actions.ADD_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            }
        case actions.ADD_SMURF_FAILURE: 
            return {
                ...state, 
                isLoading:false,
                error: action.payload
            }
        case actions.UPDATE_FORM_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:  return state
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary