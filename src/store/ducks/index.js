import { combineReducers } from 'redux';

const emptyState = {};

export default combineReducers({
  empty: () => emptyState,
});
