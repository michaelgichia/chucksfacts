/*
 *
 * Category actions
 *
 */

import xhrRequest from 'utils/axiosInstance';
import { READ_CATEGORY } from './constants';

export const readCategory = (query, newCategory) => dispatch => {
	dispatch({ type: READ_CATEGORY.REQUEST, newCategory });
	return xhrRequest(`/jokes/random${query}`).then(
		category =>
			dispatch({ type: READ_CATEGORY.SUCCESS, category, newCategory }),
		error => dispatch({ type: READ_CATEGORY.FAILURE, error }),
	);
};
