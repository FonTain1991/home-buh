import {ADD_INCOME, LOAD_INCOME} from "../types";

const initialState = {
	income: [],
	loading: true
};

export const incomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_INCOME:
			return {
				...state,
				income: action.payload,
				loading: false
			}
		case ADD_INCOME:
			return {
				...state,
				income: [...state.income, {...action.payload}]
			}
	}
	return state;
}