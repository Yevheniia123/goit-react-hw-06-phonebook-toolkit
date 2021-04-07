import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import action from './phonebook-action';

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
