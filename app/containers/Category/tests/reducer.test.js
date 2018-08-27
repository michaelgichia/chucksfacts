import { fromJS } from 'immutable';
import categoryReducer from '../reducer';

describe('categoryReducer', () => {
  it('returns the initial state', () => {
    expect(categoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
