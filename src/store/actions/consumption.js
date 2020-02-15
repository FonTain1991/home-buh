import {ADD_CONSUMPTION, LOAD_CONSUMPTION} from "../types";
import {DB} from "../../db";

export const addСonsumption = consumption => async dispatch => {
	const payload = {...consumption};
	const id = await DB.create('consumption', payload);
	payload.id = id;
	dispatch({
		type: ADD_CONSUMPTION,
		payload
	})
};

export const loadСonsumption = () => {
	return async dispatch => {
		const consumption = await DB.get('consumption');

		dispatch({
			type: LOAD_CONSUMPTION,
			payload: consumption
		})
	}
};