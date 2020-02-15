import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {incomeReducer} from "./reducers/income";
import {consumptionReducer} from "./reducers/consumption";


const rootReducer = combineReducers({
	income: incomeReducer,
	consumption: consumptionReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));