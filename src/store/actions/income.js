import {ADD_INCOME, LOAD_INCOME} from "../types";
import {DB} from "../../db";

export const addIncome = income => async dispatch => {
	const payload = {...income};
	const id = await DB.create('income', payload);
	payload.id = id;
	dispatch({
		type: ADD_INCOME,
		payload
	})
};

export const loadIncome = () => {
	return async dispatch => {
		const income = await DB.get('income');

		dispatch({
			type: LOAD_INCOME,
			payload: income
		})
	}
};