import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/Add', ({ name, number }) => {
  return { payload: { id: uuidv4(), name, number } };
});
const deleteContact = createAction('phonebook/delete');
const filterContact = createAction('phonebook/Filter');

export default { addContact, deleteContact, filterContact };
