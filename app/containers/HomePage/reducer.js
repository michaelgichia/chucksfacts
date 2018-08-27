/*
 *
 * HomePage reducer
 *
 */

import { READ_CATEGORIES } from './constants';

export const initialState = {
	categories: [],
	isFetching: false,
};

function homePageReducer(state = initialState, action) {
	switch (action.type) {
		case READ_CATEGORIES.REQUEST:
			return { ...state, isFetching: true };

		case READ_CATEGORIES.SUCCESS:
			return {
				...state,
				categories: action.categories.data,
				isFetching: false,
			};

		case READ_CATEGORIES.FAILURE:
			return { ...state, isFetching: false };

		default:
			return state;
	}
}

export default homePageReducer;