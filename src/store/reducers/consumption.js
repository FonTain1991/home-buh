import {ADD_CONSUMPTION, LOAD_CONSUMPTION} from "../types";

const initialState = {
	consumption: [],
	loading: true
};

export const consumptionReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_CONSUMPTION:
			return {
				...state,
				consumption: action.payload,
				loading: false
			}
		case ADD_CONSUMPTION:
			return {
				...state,
				consumption: [...state.consumption, {...action.payload}]
			}
	}
	return state;
}