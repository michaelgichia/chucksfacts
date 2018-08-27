import xhrRequest from 'utils/axiosInstance';
import { READ_CATEGORIES } from './constants';

export const readCategories = () => dispatch => {
	dispatch({ type: READ_CATEGORIES.REQUEST });
	return xhrRequest('/jokes/categories').then(
		categories => dispatch({ type: READ_CATEGORIES.SUCCESS, categories }),
		error => dispatch({ type: READ_CATEGORIES.FAILURE, error }),
	);
};