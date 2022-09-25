import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';

export const dummyAction = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DUMMY_TYPE,
			payload: term,
		});
	};
};
