import {ActionType} from '../action-types';

interface DummyAction {
	type: ActionType.DUMMY_TYPE;
	payload: any;
}
interface DummyAction2 {
	type: ActionType.DUMMY_TYPE;
	payload: any;
}

export type Action = DummyAction | DummyAction2;
