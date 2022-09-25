import {ActionType} from '../action-types';
import {Action} from '../actions';

const initialState = {};

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.DUMMY_TYPE:
			return {...state};

		default:
			return state;
	}
};
