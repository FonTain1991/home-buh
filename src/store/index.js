import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {incomeReducer} from "./reducers/income";


const rootReducer = combineReducers({
	income: incomeReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));