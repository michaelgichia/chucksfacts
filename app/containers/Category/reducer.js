/*
 *
 * Category reducer
 *
 */

import { READ_CATEGORY } from './constants';
import { color } from 'utils/constants';

export const initialState = {
	category: [],
	isFetching: false,
};

function generateColor(len) {
	return color[String(len).substr(-1)];
}

function categoryReducer(state = initialState, action) {
	switch (action.type) {
		case READ_CATEGORY.REQUEST:
			if (action.newCategory) {
				return {
					...state,
					isFetching: true,
					category: [],
				};
			}
			return { ...state, isFetching: true };

		case READ_CATEGORY.SUCCESS:
			const dynamicColor = String(state.category.length).substr(-1);
			action.category.data.color = color[dynamicColor];
			return {
				...state,
				category: action.newCategory
					? [action.category.data]
					: [...state.category].concat(action.category.data),
				isFetching: false,
			};

		case READ_CATEGORY.FAILURE:
			return { ...state, isFetching: false };

		default:
			return state;
	}
}

export default categoryReducer;
